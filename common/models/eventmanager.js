'use strict';

module.exports = function(Eventmanager) {
    //Eventmanager.settings.acls.length = 0;
    var Event = Eventmanager.app.models.Event;
    Eventmanager.prototype.getCollaboratings = function(callback) {
        var events = [];
        var count = 0;
        var cIds = this.collaboratingIds;
        if (cIds.length > 0) {
            cIds.forEach(function(id) {
                Event.findById(id, function(err, success) {
                    if (!err) {
                        events.push(success);
                        count++;
                        if (count == cIds.length) {
                            callback(null, events);
                        }
                    } else {
                        count++;
                        if (count == cIds.length) {
                            callback(err, null);
                        }
                    }
                })
            }, this);
        } else {
            callback(null, []);
        }

    };
};