// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
    .module('EleventApp')
    .factory('AuthService', ['Eventmanager', '$q', '$rootScope', '$state', function(
        Eventmanager, $q, $rootScope, $state) {
        function login(email, password) {
            return Eventmanager
                .login({ email: email, password: password })
                .$promise
                .then(function(response) {
                    $rootScope.currentUser = {
                        id: response.user.id,
                        tokenId: response.id,
                        email: response.user.email,
                        username: response.user.username,
                        image: response.user.profilePicture,
                        name: response.user.firstname + " " + response.user.lastname
                    };
                    $rootScope.$broadcast('logged-in', { uId: response.user.id });
                }, function(err) {
                    $rootScope.$broadcast('login-failed');
                });
        }

        function logout() {
            return Eventmanager
                .logout()
                .$promise
                .then(function() {

                    $rootScope.currentUser = null;
                    $state.go("login");
                });
        }

        function register(obj) {
            return Eventmanager
                .create({
                    "firstname": obj.firstname,
                    "lastname": obj.lastname,
                    "profilePicture": "",
                    "companyName": obj.companyName,
                    "email": obj.email,
                    "password": obj.password
                })
                .$promise;
        }

        function refresh(accessTokenId) {
            return Eventmanager
                .getCurrent(function(userResource) {
                    $rootScope.currentUser = {
                        id: userResource.id,
                        tokenId: userResource.id,
                        email: userResource.email,
                        username: userResource.username,
                        image: userResource.profilePicture,
                        name: userResource.firstname + " " + userResource.lastname

                    };
                    $rootScope.$broadcast('user-refresh', { args: { bookmarks: userResource.bookmarks } });
                });
        }
        return {
            login: login,
            logout: logout,
            register: register,
            refresh: refresh
        };
    }]);