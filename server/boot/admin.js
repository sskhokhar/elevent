'use strict';

module.exports = function(app) {
    /*
     * The `app` object provides access to a variety of LoopBack resources such as
     * models (e.g. `app.models.YourModelName`) or data sources (e.g.
     * `app.datasources.YourDataSource`). See
     * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
     * for more info.
     */
    var User = app.models.Eventmanager;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;
    var ACL = app.models.ACL;
    User.findOrCreate({ name: "Administrator", email: "admin@elevent.com", username: "admin", password: "12345" }, function(err, succ) {
        if (err) {
            console.log(err);
        } else {
            Role.create({
                name: 'superUser'
            }, function(createRoleError, createRole) {
                createRole.principals.create({
                    principalType: RoleMapping.USER,
                    principalId: succ.id
                });
            });
        }
    });




};