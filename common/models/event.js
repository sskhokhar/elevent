'use strict';

module.exports = function(Event) {
    Event.prototype.invite = function(details, callback) {
        var response;
        console.log(details);
        Event.app.models.email.send({
            to: 'shah.khokhar@hotmail.com',
            from: 'bilalaftabmalik@gmail.com',
            subject: 'my subject',
            text: 'my text',
            html: 'my <em>html</em>'
        }, function(err, mail) {
            console.log(err);
            callback(err);
        });
        //callback(null, response);
    };
};