const get_today = function () {
    // current timestamp in milliseconds
    const ts = Date.now();

    const date_ob = new Date(ts);
    const date = ("0" + date_ob.getDate()).slice(-2);
    const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    const year = date_ob.getFullYear();

    // prints date & time in YYYY-MM-DD format
    return year + "-" + month + "-" + date;
}
module.exports.get_today = get_today