'use strict';

module.exports = function(Event) {
    Event.prototype.invite = function(details, callback) {
        var response;
        console.log(details);
        Event.app.models.email.send({
            to: 'shah.khokhar@hotmail.com',
            from: 'you@gmail.com',
            subject: 'my subject',
            text: 'my text',
            html: 'my <em>html</em>'
        }, function(err, mail) {
            console.log('email sent!');
            callback(err);
        });
        //callback(null, response);
    };
};