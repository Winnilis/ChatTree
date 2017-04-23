var fs = require('fs');

module.exports = function (app) {
    //application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/pages/home.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
