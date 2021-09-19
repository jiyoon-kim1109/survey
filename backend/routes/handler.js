const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');

const sequelize = require('../utils/database');
const Sequelize = require('sequelize');
const session = require('express-session');

const User = require('../models/users');
const Survey = require("../models/surveys");
const Question = require("../models/questions");
const QuestionOption = require("../models/question_options");
const Answer = require("../models/answers");
const {request} = require("express");

const date = require('../utils/date');

const jwt = require('jsonwebtoken');
const multer = require("multer");
const path = require("path");

var cors = require('cors');

router.use(cors({origin: true, credentials: true}));

router.post('/register', (req, res) => {
    res.end('N/A');
    try {
        const password = bcrypt.hashSync(req.body.password, 10);
        console.log(password);
        const result = sequelize.transaction(async (t) => {
            const userInput = {
                "email": req.body.email,
                "password": password,
                "nickname": req.body.nickname,
            };
            const user = await User.create(userInput, {transaction: t});
            return user
        });
    } catch (e) {
        console.log(e);
    }
});

router.post('/login', (req, res) => {

    try {
        User.findOne({where: {email: req.body.email}})
            .then((foundUser) => {
                if (foundUser) {

                    const submittedPass = req.body.password;
                    const storedPass = foundUser.password;

                    bcrypt.compare(submittedPass, storedPass, function (errB, resB) {
                        if (resB) {
                            req.session.loggedin = true;
                            req.session.email = foundUser.email;
                            req.session.nickname = foundUser.nickname;
                            // res.data.accessToken = 'asd';
                            const token = jwt.sign({id: foundUser.id}, 'supersecret', {
                                expiresIn: 86400 // expires in 24 hours
                            });
                            res.status(200).send({auth: true, accessToken: token, id: foundUser.id});
                            // res.redirect('/');
                            // res.end('success');
                        } else {
                            res.send('Incorrect Email and/or Password!');
                            res.end();
                        }
                    });

                }
            });
    } catch (e) {
        console.log(e);
        res.redirect('/');
        res.end();
    }
});

router.get('/survey-list', (req, res) => {
    Survey.findAll({
        where: {start_date: {[Sequelize.Op.lte]: date.get_today()}, end_date: {[Sequelize.Op.gte]: date.get_today()}},
        order: [['createdAt', 'DESC']]
    }).then((survey) => {
        console.log(survey);
        res.end(JSON.stringify(survey));
    });
});

router.get('/survey-latest', (req, res) => {
    Survey.findAll({
        limit: 1,
        where: {start_date: {[Sequelize.Op.lte]: date.get_today()}, end_date: {[Sequelize.Op.gte]: date.get_today()}},
        order: [['createdAt', 'DESC']]
    }).then((survey) => {
        // console.log(survey);
        res.end(JSON.stringify(survey[0]));
    });
});

router.get('/survey-read/:id', (req, res) => {
    Survey.findOne({
        where: {id: req.params.id},
        include: [
            {model: Question, include: [QuestionOption, Answer]}
        ]
    }).then((survey) => {
        // console.log(survey.questions);
        res.end(JSON.stringify(survey));
    });
});

router.get('/survey-edit/:id', (req, res) => {
    Survey.findOne({
        where: {id: req.params.id},
        include: [{
            model: Question
        }]
    }).then((survey) => {
        res.end(JSON.stringify(survey));
    });
});

router.put('/survey-edit', (req, res) => {
    try {
        const result = sequelize.transaction(async (t) => {
            const surveyInput = {
                "title": req.body.title,
                "start_date": req.body.start_date,
                "end_date": req.body.end_date,
                "description": req.body.description
            };
            const survey = await Survey.update(surveyInput, {where: {id: req.body.id}}, {transaction: t});
            res.send(req.body.id);
        });
    } catch (e) {
        console.log(e);
        res.redirect('/survey-list');
        res.end();
    }
});

router.post('/survey-add', (req, res) => {
    try {
        const result = sequelize.transaction(async (t) => {

            console.log(req.body);

            const surveyInput = {
                "title": req.body.title,
                "start_date": req.body.start_date,
                "end_date": req.body.end_date,
                "description": req.body.description,
                "user_id": req.body.user_id
            };
            const survey = await Survey.create(surveyInput, {transaction: t});
            console.log(survey.dataValues);
            // res.redirect('/survey-list');
            // res.end();
            // return survey.dataValues;
            res.send(survey);
        });
    } catch (e) {
        console.log(e);
        res.redirect('/survey-list');
        res.end();
    }
});

router.post('/question-add', (req, res) => {
    try {
        const result = sequelize.transaction(async (t) => {
            console.log(req.body);
            const questionInput = {
                "content": req.body.content,
                "type": req.body.type,
                "survey_id": req.body.survey_id
            };
            const question = await Question.create(questionInput, {transaction: t});
            // res.redirect('/survey-list');
            // res.end();
            res.send(question);
        });
    } catch (e) {
        console.log(e);
        // res.redirect('/survey-list');
        res.end();
    }
});

router.put('/question-edit', (req, res) => {
    try {
        const result = sequelize.transaction(async (t) => {
            console.log(req.body);
            const questionInput = {
                "content": req.body.content,
                "type": req.body.type,
                "survey_id": req.body.survey_id
            };
            const question = await Question.update(questionInput, {where: {id: req.body.id}}, {transaction: t});
            // res.redirect('/survey-list');
            // res.end();
            res.send(question);
        });
    } catch (e) {
        console.log(e);
        // res.redirect('/survey-list');
        res.end();
    }
});

router.post('/option-add', (req, res) => {
    try {
        const result = sequelize.transaction(async (t) => {
            const optionInput = {
                "order": Number(req.body.order),
                "name": req.body.name,
                "question_id": req.body.question_id
            };
            console.log(optionInput);
            const option = await QuestionOption.create(optionInput, {transaction: t});
            // res.redirect('/survey-list');
            // res.end();
            res.send(option);
        });
    } catch (e) {
        console.log(e);
        // res.redirect('/survey-list');
        res.end();
    }
});

router.put('/option-edit', (req, res) => {
    try {
        const result = sequelize.transaction(async (t) => {
            const optionInput = {
                "order": Number(req.body.order),
                "name": req.body.name
            };
            console.log(optionInput);
            const option = await QuestionOption.update(optionInput, {where: {id: req.body.id}}, {transaction: t});
            res.send(option);
        });
    } catch (e) {
        console.log(e);
        // res.redirect('/survey-list');
        res.end();
    }
});

const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + '-' + path.parse(file.originalname).name + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
}).single("file");

router.post('/upload', upload, function (req, res) {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.file);//Here you get file.

    /*Now do where ever you want to do*/
    const file_name = req.file.filename;
    return res.send({file_name: file_name});
});

router.put('/survey_main_image_edit', (req, res) => {
    try {
        const result = sequelize.transaction(async (t) => {
            const optionInput = {
                "main_image": req.body.main_image
            };
            console.log(optionInput);
            const option = await Survey.update(optionInput, {where: {id: req.body.survey_id}}, {transaction: t});
            res.send(option);
        });
    } catch (e) {
        console.log(e);
        // res.redirect('/survey-list');
        res.end();
    }
});

router.post('/answer-add', (req, res) => {
    try {
        const result = sequelize.transaction(async (t) => {

            console.log(req.body);

            const answerInput = {
                "question_id": req.body.question_id,
                "answer_numeric": req.body.answer_numeric,
                "answer_text": req.body.answer_text,
                "answer_yn": req.body.answer_yn
            };
            const answer = await Answer.create(answerInput, {transaction: t});
            console.log(answer.dataValues);
            // res.redirect('/survey-list');
            // res.end();
            // return survey.dataValues;
            res.send(answer);
        });
    } catch (e) {
        console.log(e);
        res.redirect('/survey-list');
        res.end();
    }
});

module.exports = router;