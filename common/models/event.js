'use strict';

module.exports = function(Event) {
    Event.prototype.invite = function(details, callback) {
        var response;
        console.log(details);
        var name = details.name;
        var eventName = details.eventName;
        var token = details.token;
        Event.app.models.email.send({
            to: 'shah.khokhar@hotmail.com',
            from: 'bilalaftabmalik@gmail.com',
            subject: 'Invitation for collaboration.',
            html: `Hi,
            ${name} has invited you to collaborate on his event ${eventName}. Click <a href="http://52.15.198.192:3000/#!/signup?token=${token}"><u>here</u></a> or copy and paste this link in your browser</br>
            http://52.15.198.192:3000/#!/signup?token=${token}
            </br></br>
            Thanks,
            `
        }, function(err, mail) {
            if (!err) {
                callback(null, mail);
            } else {
                callback(err, null);
            }
        });
        //callback(null, response);
    };
};