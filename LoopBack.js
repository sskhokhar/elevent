// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "LoopBack";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name LoopBack
 * @module
 * @description
 *
 * The `LoopBack` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("LoopBack", ['ngResource']);

/**
 * @ngdoc object
 * @name LoopBack.User
 * @header LoopBack.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name LoopBack.User#prototype$__findById__accessTokens
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#prototype$__destroyById__accessTokens
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#prototype$__updateById__accessTokens
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#prototype$__get__accessTokens
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#prototype$__create__accessTokens
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#prototype$__delete__accessTokens
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#prototype$__count__accessTokens
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#create
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#createMany
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#patchOrCreate
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Users",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#replaceOrCreate
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#upsertWithWhere
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#exists
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#findById
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#replaceById
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#find
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#findOne
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#updateAll
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#deleteById
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#count
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#prototype$patchAttributes
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Users/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#createChangeStream
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#login
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#logout
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#confirm
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#resetPassword
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#changePassword
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Users/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.User#getCurrent
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name LoopBack.User#upsert
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.User#updateOrCreate
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.User#patchOrCreateWithWhere
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name LoopBack.User#update
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name LoopBack.User#destroyById
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.User#removeById
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.User#updateAttributes
             * @methodOf LoopBack.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name LoopBack.User#getCachedCurrent
         * @methodOf LoopBack.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link LoopBack.User#login} or
         * {@link LoopBack.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name LoopBack.User#isAuthenticated
         * @methodOf LoopBack.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name LoopBack.User#getCurrentId
         * @methodOf LoopBack.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name LoopBack.User#modelName
        * @propertyOf LoopBack.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name LoopBack.Eventmanager
 * @header LoopBack.Eventmanager
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Eventmanager` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Eventmanager",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Eventmanagers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#prototype$__findById__accessTokens
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#prototype$__destroyById__accessTokens
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#prototype$__updateById__accessTokens
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Eventmanager.events.findById() instead.
            "prototype$__findById__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/events/:fk",
              method: "GET",
            },

            // INTERNAL. Use Eventmanager.events.destroyById() instead.
            "prototype$__destroyById__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/events/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Eventmanager.events.updateById() instead.
            "prototype$__updateById__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/events/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Eventmanager.events.link() instead.
            "prototype$__link__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/events/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Eventmanager.events.unlink() instead.
            "prototype$__unlink__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/events/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Eventmanager.events.exists() instead.
            "prototype$__exists__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/events/rel/:fk",
              method: "HEAD",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#prototype$__get__accessTokens
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Queries accessTokens of Eventmanager.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Eventmanagers/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#prototype$__create__accessTokens
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Eventmanagers/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#prototype$__delete__accessTokens
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Eventmanagers/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#prototype$__count__accessTokens
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Counts accessTokens of Eventmanager.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Eventmanagers/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Eventmanager.events() instead.
            "prototype$__get__events": {
              isArray: true,
              url: urlBase + "/Eventmanagers/:id/events",
              method: "GET",
            },

            // INTERNAL. Use Eventmanager.events.create() instead.
            "prototype$__create__events": {
              url: urlBase + "/Eventmanagers/:id/events",
              method: "POST",
            },

            // INTERNAL. Use Eventmanager.events.destroyAll() instead.
            "prototype$__delete__events": {
              url: urlBase + "/Eventmanagers/:id/events",
              method: "DELETE",
            },

            // INTERNAL. Use Eventmanager.events.count() instead.
            "prototype$__count__events": {
              url: urlBase + "/Eventmanagers/:id/events/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#create
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Eventmanagers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#createMany
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Eventmanagers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#patchOrCreate
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Eventmanagers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#replaceOrCreate
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Eventmanagers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#upsertWithWhere
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Eventmanagers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#exists
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Eventmanagers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#findById
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Eventmanagers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#replaceById
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Eventmanagers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#find
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Eventmanagers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#findOne
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Eventmanagers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#updateAll
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Eventmanagers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#deleteById
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Eventmanagers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#count
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Eventmanagers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#prototype$patchAttributes
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Eventmanagers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#createChangeStream
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Eventmanagers/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#login
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Eventmanagers/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#logout
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Eventmanagers/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#confirm
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Eventmanagers/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#resetPassword
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Eventmanagers/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#changePassword
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Eventmanagers/change-password",
              method: "POST",
            },

            // INTERNAL. Use Event.userId() instead.
            "::get::Event::userId": {
              url: urlBase + "/Events/:id/userId",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#getCurrent
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Eventmanagers" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#upsert
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#updateOrCreate
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#patchOrCreateWithWhere
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#update
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#destroyById
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#removeById
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#updateAttributes
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name LoopBack.Eventmanager#getCachedCurrent
         * @methodOf LoopBack.Eventmanager
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link LoopBack.Eventmanager#login} or
         * {@link LoopBack.Eventmanager#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Eventmanager instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name LoopBack.Eventmanager#isAuthenticated
         * @methodOf LoopBack.Eventmanager
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name LoopBack.Eventmanager#getCurrentId
         * @methodOf LoopBack.Eventmanager
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name LoopBack.Eventmanager#modelName
        * @propertyOf LoopBack.Eventmanager
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Eventmanager`.
        */
        R.modelName = "Eventmanager";

    /**
     * @ngdoc object
     * @name LoopBack.Eventmanager.events
     * @header LoopBack.Eventmanager.events
     * @object
     * @description
     *
     * The object `Eventmanager.events` groups methods
     * manipulating `Event` instances related to `Eventmanager`.
     *
     * Call {@link LoopBack.Eventmanager#events Eventmanager.events()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#events
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Queries events of Eventmanager.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::get::Eventmanager::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager.events#count
             * @methodOf LoopBack.Eventmanager.events
             *
             * @description
             *
             * Counts events of Eventmanager.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.events.count = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::count::Eventmanager::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager.events#create
             * @methodOf LoopBack.Eventmanager.events
             *
             * @description
             *
             * Creates a new instance in events of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.create = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::create::Eventmanager::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager.events#createMany
             * @methodOf LoopBack.Eventmanager.events
             *
             * @description
             *
             * Creates a new instance in events of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.createMany = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::createMany::Eventmanager::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager.events#destroyAll
             * @methodOf LoopBack.Eventmanager.events
             *
             * @description
             *
             * Deletes all events of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.events.destroyAll = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::delete::Eventmanager::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager.events#destroyById
             * @methodOf LoopBack.Eventmanager.events
             *
             * @description
             *
             * Delete a related item by id for events.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.events.destroyById = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::destroyById::Eventmanager::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager.events#exists
             * @methodOf LoopBack.Eventmanager.events
             *
             * @description
             *
             * Check the existence of events relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.exists = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::exists::Eventmanager::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager.events#findById
             * @methodOf LoopBack.Eventmanager.events
             *
             * @description
             *
             * Find a related item by id for events.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.findById = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::findById::Eventmanager::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager.events#link
             * @methodOf LoopBack.Eventmanager.events
             *
             * @description
             *
             * Add a related item by id for events.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.link = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::link::Eventmanager::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager.events#unlink
             * @methodOf LoopBack.Eventmanager.events
             *
             * @description
             *
             * Remove the events relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.events.unlink = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::unlink::Eventmanager::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager.events#updateById
             * @methodOf LoopBack.Eventmanager.events
             *
             * @description
             *
             * Update a related item by id for events.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.updateById = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::updateById::Eventmanager::events"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name LoopBack.Vendor
 * @header LoopBack.Vendor
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Vendor` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Vendor",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Vendors/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#prototype$__findById__accessTokens
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#prototype$__destroyById__accessTokens
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#prototype$__updateById__accessTokens
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Vendor.events.findById() instead.
            "prototype$__findById__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/events/:fk",
              method: "GET",
            },

            // INTERNAL. Use Vendor.events.destroyById() instead.
            "prototype$__destroyById__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/events/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Vendor.events.updateById() instead.
            "prototype$__updateById__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/events/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Vendor.events.link() instead.
            "prototype$__link__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/events/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Vendor.events.unlink() instead.
            "prototype$__unlink__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/events/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Vendor.events.exists() instead.
            "prototype$__exists__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/events/rel/:fk",
              method: "HEAD",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#prototype$__get__accessTokens
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Queries accessTokens of Vendor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Vendors/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#prototype$__create__accessTokens
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Vendors/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#prototype$__delete__accessTokens
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Vendors/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#prototype$__count__accessTokens
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Counts accessTokens of Vendor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Vendors/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Vendor.events() instead.
            "prototype$__get__events": {
              isArray: true,
              url: urlBase + "/Vendors/:id/events",
              method: "GET",
            },

            // INTERNAL. Use Vendor.events.create() instead.
            "prototype$__create__events": {
              url: urlBase + "/Vendors/:id/events",
              method: "POST",
            },

            // INTERNAL. Use Vendor.events.destroyAll() instead.
            "prototype$__delete__events": {
              url: urlBase + "/Vendors/:id/events",
              method: "DELETE",
            },

            // INTERNAL. Use Vendor.events.count() instead.
            "prototype$__count__events": {
              url: urlBase + "/Vendors/:id/events/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#create
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Vendors",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#createMany
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Vendors",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#patchOrCreate
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Vendors",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#replaceOrCreate
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Vendors/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#upsertWithWhere
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Vendors/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#exists
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Vendors/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#findById
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Vendors/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#replaceById
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Vendors/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#find
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Vendors",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#findOne
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Vendors/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#updateAll
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Vendors/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#deleteById
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Vendors/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#count
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Vendors/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#prototype$patchAttributes
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Vendors/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#createChangeStream
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Vendors/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#login
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Vendors/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#logout
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Vendors/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#confirm
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Vendors/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#resetPassword
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Vendors/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#changePassword
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Vendors/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#getCurrent
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Vendors" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name LoopBack.Vendor#upsert
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#updateOrCreate
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#patchOrCreateWithWhere
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#update
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#destroyById
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#removeById
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.Vendor#updateAttributes
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name LoopBack.Vendor#getCachedCurrent
         * @methodOf LoopBack.Vendor
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link LoopBack.Vendor#login} or
         * {@link LoopBack.Vendor#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Vendor instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name LoopBack.Vendor#isAuthenticated
         * @methodOf LoopBack.Vendor
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name LoopBack.Vendor#getCurrentId
         * @methodOf LoopBack.Vendor
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name LoopBack.Vendor#modelName
        * @propertyOf LoopBack.Vendor
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Vendor`.
        */
        R.modelName = "Vendor";

    /**
     * @ngdoc object
     * @name LoopBack.Vendor.events
     * @header LoopBack.Vendor.events
     * @object
     * @description
     *
     * The object `Vendor.events` groups methods
     * manipulating `Event` instances related to `Vendor`.
     *
     * Call {@link LoopBack.Vendor#events Vendor.events()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name LoopBack.Vendor#events
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Queries events of Vendor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::get::Vendor::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Vendor.events#count
             * @methodOf LoopBack.Vendor.events
             *
             * @description
             *
             * Counts events of Vendor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.events.count = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::count::Vendor::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Vendor.events#create
             * @methodOf LoopBack.Vendor.events
             *
             * @description
             *
             * Creates a new instance in events of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.create = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::create::Vendor::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Vendor.events#createMany
             * @methodOf LoopBack.Vendor.events
             *
             * @description
             *
             * Creates a new instance in events of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.createMany = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::createMany::Vendor::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Vendor.events#destroyAll
             * @methodOf LoopBack.Vendor.events
             *
             * @description
             *
             * Deletes all events of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.events.destroyAll = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::delete::Vendor::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Vendor.events#destroyById
             * @methodOf LoopBack.Vendor.events
             *
             * @description
             *
             * Delete a related item by id for events.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.events.destroyById = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::destroyById::Vendor::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Vendor.events#exists
             * @methodOf LoopBack.Vendor.events
             *
             * @description
             *
             * Check the existence of events relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.exists = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::exists::Vendor::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Vendor.events#findById
             * @methodOf LoopBack.Vendor.events
             *
             * @description
             *
             * Find a related item by id for events.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.findById = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::findById::Vendor::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Vendor.events#link
             * @methodOf LoopBack.Vendor.events
             *
             * @description
             *
             * Add a related item by id for events.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.link = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::link::Vendor::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Vendor.events#unlink
             * @methodOf LoopBack.Vendor.events
             *
             * @description
             *
             * Remove the events relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.events.unlink = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::unlink::Vendor::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Vendor.events#updateById
             * @methodOf LoopBack.Vendor.events
             *
             * @description
             *
             * Update a related item by id for events.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.updateById = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::updateById::Vendor::events"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name LoopBack.Event
 * @header LoopBack.Event
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Event` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Event",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Events/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Event.userId() instead.
            "prototype$__get__userId": {
              url: urlBase + "/Events/:id/userId",
              method: "GET",
            },

            // INTERNAL. Use Event.tasks.findById() instead.
            "prototype$__findById__tasks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/tasks/:fk",
              method: "GET",
            },

            // INTERNAL. Use Event.tasks.destroyById() instead.
            "prototype$__destroyById__tasks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/tasks/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Event.tasks.updateById() instead.
            "prototype$__updateById__tasks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/tasks/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Event.tasks.link() instead.
            "prototype$__link__tasks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/tasks/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Event.tasks.unlink() instead.
            "prototype$__unlink__tasks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/tasks/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Event.tasks.exists() instead.
            "prototype$__exists__tasks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/tasks/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Event.tasks() instead.
            "prototype$__get__tasks": {
              isArray: true,
              url: urlBase + "/Events/:id/tasks",
              method: "GET",
            },

            // INTERNAL. Use Event.tasks.create() instead.
            "prototype$__create__tasks": {
              url: urlBase + "/Events/:id/tasks",
              method: "POST",
            },

            // INTERNAL. Use Event.tasks.destroyAll() instead.
            "prototype$__delete__tasks": {
              url: urlBase + "/Events/:id/tasks",
              method: "DELETE",
            },

            // INTERNAL. Use Event.tasks.count() instead.
            "prototype$__count__tasks": {
              url: urlBase + "/Events/:id/tasks/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#create
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Events",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#createMany
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Events",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#patchOrCreate
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Events",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#replaceOrCreate
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Events/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#upsertWithWhere
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Events/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#exists
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Events/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#findById
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Events/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#replaceById
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Events/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#find
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Events",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#findOne
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Events/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#updateAll
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Events/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#deleteById
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Events/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#count
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Events/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#prototype$patchAttributes
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Events/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Event#createChangeStream
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Events/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Eventmanager.events.findById() instead.
            "::findById::Eventmanager::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/events/:fk",
              method: "GET",
            },

            // INTERNAL. Use Eventmanager.events.destroyById() instead.
            "::destroyById::Eventmanager::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/events/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Eventmanager.events.updateById() instead.
            "::updateById::Eventmanager::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/events/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Eventmanager.events.link() instead.
            "::link::Eventmanager::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/events/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Eventmanager.events.unlink() instead.
            "::unlink::Eventmanager::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/events/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Eventmanager.events.exists() instead.
            "::exists::Eventmanager::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Eventmanagers/:id/events/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Eventmanager.events() instead.
            "::get::Eventmanager::events": {
              isArray: true,
              url: urlBase + "/Eventmanagers/:id/events",
              method: "GET",
            },

            // INTERNAL. Use Eventmanager.events.create() instead.
            "::create::Eventmanager::events": {
              url: urlBase + "/Eventmanagers/:id/events",
              method: "POST",
            },

            // INTERNAL. Use Eventmanager.events.createMany() instead.
            "::createMany::Eventmanager::events": {
              isArray: true,
              url: urlBase + "/Eventmanagers/:id/events",
              method: "POST",
            },

            // INTERNAL. Use Eventmanager.events.destroyAll() instead.
            "::delete::Eventmanager::events": {
              url: urlBase + "/Eventmanagers/:id/events",
              method: "DELETE",
            },

            // INTERNAL. Use Eventmanager.events.count() instead.
            "::count::Eventmanager::events": {
              url: urlBase + "/Eventmanagers/:id/events/count",
              method: "GET",
            },

            // INTERNAL. Use Vendor.events.findById() instead.
            "::findById::Vendor::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/events/:fk",
              method: "GET",
            },

            // INTERNAL. Use Vendor.events.destroyById() instead.
            "::destroyById::Vendor::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/events/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Vendor.events.updateById() instead.
            "::updateById::Vendor::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/events/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Vendor.events.link() instead.
            "::link::Vendor::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/events/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Vendor.events.unlink() instead.
            "::unlink::Vendor::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/events/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Vendor.events.exists() instead.
            "::exists::Vendor::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Vendors/:id/events/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Vendor.events() instead.
            "::get::Vendor::events": {
              isArray: true,
              url: urlBase + "/Vendors/:id/events",
              method: "GET",
            },

            // INTERNAL. Use Vendor.events.create() instead.
            "::create::Vendor::events": {
              url: urlBase + "/Vendors/:id/events",
              method: "POST",
            },

            // INTERNAL. Use Vendor.events.createMany() instead.
            "::createMany::Vendor::events": {
              isArray: true,
              url: urlBase + "/Vendors/:id/events",
              method: "POST",
            },

            // INTERNAL. Use Vendor.events.destroyAll() instead.
            "::delete::Vendor::events": {
              url: urlBase + "/Vendors/:id/events",
              method: "DELETE",
            },

            // INTERNAL. Use Vendor.events.count() instead.
            "::count::Vendor::events": {
              url: urlBase + "/Vendors/:id/events/count",
              method: "GET",
            },

            // INTERNAL. Use Task.eventId() instead.
            "::get::Task::eventId": {
              url: urlBase + "/Tasks/:id/eventId",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name LoopBack.Event#upsert
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.Event#updateOrCreate
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.Event#patchOrCreateWithWhere
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name LoopBack.Event#update
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name LoopBack.Event#destroyById
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.Event#removeById
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.Event#updateAttributes
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name LoopBack.Event#modelName
        * @propertyOf LoopBack.Event
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Event`.
        */
        R.modelName = "Event";


            /**
             * @ngdoc method
             * @name LoopBack.Event#userId
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Fetches belongsTo relation userId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Eventmanager` object.)
             * </em>
             */
        R.userId = function() {
          var TargetResource = $injector.get("Eventmanager");
          var action = TargetResource["::get::Event::userId"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name LoopBack.Event.tasks
     * @header LoopBack.Event.tasks
     * @object
     * @description
     *
     * The object `Event.tasks` groups methods
     * manipulating `Task` instances related to `Event`.
     *
     * Call {@link LoopBack.Event#tasks Event.tasks()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name LoopBack.Event#tasks
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Queries tasks of Event.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R.tasks = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::get::Event::tasks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.tasks#count
             * @methodOf LoopBack.Event.tasks
             *
             * @description
             *
             * Counts tasks of Event.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.tasks.count = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::count::Event::tasks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.tasks#create
             * @methodOf LoopBack.Event.tasks
             *
             * @description
             *
             * Creates a new instance in tasks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R.tasks.create = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::create::Event::tasks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.tasks#createMany
             * @methodOf LoopBack.Event.tasks
             *
             * @description
             *
             * Creates a new instance in tasks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R.tasks.createMany = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::createMany::Event::tasks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.tasks#destroyAll
             * @methodOf LoopBack.Event.tasks
             *
             * @description
             *
             * Deletes all tasks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.tasks.destroyAll = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::delete::Event::tasks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.tasks#destroyById
             * @methodOf LoopBack.Event.tasks
             *
             * @description
             *
             * Delete a related item by id for tasks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for tasks
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.tasks.destroyById = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::destroyById::Event::tasks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.tasks#exists
             * @methodOf LoopBack.Event.tasks
             *
             * @description
             *
             * Check the existence of tasks relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for tasks
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R.tasks.exists = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::exists::Event::tasks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.tasks#findById
             * @methodOf LoopBack.Event.tasks
             *
             * @description
             *
             * Find a related item by id for tasks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for tasks
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R.tasks.findById = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::findById::Event::tasks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.tasks#link
             * @methodOf LoopBack.Event.tasks
             *
             * @description
             *
             * Add a related item by id for tasks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `fk` – `{*}` - Foreign key for tasks
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R.tasks.link = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::link::Event::tasks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.tasks#unlink
             * @methodOf LoopBack.Event.tasks
             *
             * @description
             *
             * Remove the tasks relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for tasks
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.tasks.unlink = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::unlink::Event::tasks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.tasks#updateById
             * @methodOf LoopBack.Event.tasks
             *
             * @description
             *
             * Update a related item by id for tasks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `fk` – `{*}` - Foreign key for tasks
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R.tasks.updateById = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::updateById::Event::tasks"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name LoopBack.Task
 * @header LoopBack.Task
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Task` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Task",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Tasks/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Task.eventId() instead.
            "prototype$__get__eventId": {
              url: urlBase + "/Tasks/:id/eventId",
              method: "GET",
            },

            // INTERNAL. Use Task.checklists.findById() instead.
            "prototype$__findById__checklists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tasks/:id/checklists/:fk",
              method: "GET",
            },

            // INTERNAL. Use Task.checklists.destroyById() instead.
            "prototype$__destroyById__checklists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tasks/:id/checklists/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Task.checklists.updateById() instead.
            "prototype$__updateById__checklists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tasks/:id/checklists/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Task.checklists.link() instead.
            "prototype$__link__checklists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tasks/:id/checklists/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Task.checklists.unlink() instead.
            "prototype$__unlink__checklists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tasks/:id/checklists/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Task.checklists.exists() instead.
            "prototype$__exists__checklists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tasks/:id/checklists/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Task.checklists() instead.
            "prototype$__get__checklists": {
              isArray: true,
              url: urlBase + "/Tasks/:id/checklists",
              method: "GET",
            },

            // INTERNAL. Use Task.checklists.create() instead.
            "prototype$__create__checklists": {
              url: urlBase + "/Tasks/:id/checklists",
              method: "POST",
            },

            // INTERNAL. Use Task.checklists.destroyAll() instead.
            "prototype$__delete__checklists": {
              url: urlBase + "/Tasks/:id/checklists",
              method: "DELETE",
            },

            // INTERNAL. Use Task.checklists.count() instead.
            "prototype$__count__checklists": {
              url: urlBase + "/Tasks/:id/checklists/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#create
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Tasks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#createMany
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Tasks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#patchOrCreate
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Tasks",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#replaceOrCreate
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Tasks/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#upsertWithWhere
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Tasks/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#exists
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Tasks/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#findById
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Tasks/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#replaceById
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Tasks/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#find
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Tasks",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#findOne
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Tasks/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#updateAll
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Tasks/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#deleteById
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Tasks/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#count
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Tasks/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#prototype$patchAttributes
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Tasks/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Task#createChangeStream
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Tasks/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Event.tasks.findById() instead.
            "::findById::Event::tasks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/tasks/:fk",
              method: "GET",
            },

            // INTERNAL. Use Event.tasks.destroyById() instead.
            "::destroyById::Event::tasks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/tasks/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Event.tasks.updateById() instead.
            "::updateById::Event::tasks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/tasks/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Event.tasks.link() instead.
            "::link::Event::tasks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/tasks/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Event.tasks.unlink() instead.
            "::unlink::Event::tasks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/tasks/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Event.tasks.exists() instead.
            "::exists::Event::tasks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/tasks/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Event.tasks() instead.
            "::get::Event::tasks": {
              isArray: true,
              url: urlBase + "/Events/:id/tasks",
              method: "GET",
            },

            // INTERNAL. Use Event.tasks.create() instead.
            "::create::Event::tasks": {
              url: urlBase + "/Events/:id/tasks",
              method: "POST",
            },

            // INTERNAL. Use Event.tasks.createMany() instead.
            "::createMany::Event::tasks": {
              isArray: true,
              url: urlBase + "/Events/:id/tasks",
              method: "POST",
            },

            // INTERNAL. Use Event.tasks.destroyAll() instead.
            "::delete::Event::tasks": {
              url: urlBase + "/Events/:id/tasks",
              method: "DELETE",
            },

            // INTERNAL. Use Event.tasks.count() instead.
            "::count::Event::tasks": {
              url: urlBase + "/Events/:id/tasks/count",
              method: "GET",
            },

            // INTERNAL. Use Checklist.taskId() instead.
            "::get::Checklist::taskId": {
              url: urlBase + "/Checklists/:id/taskId",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name LoopBack.Task#upsert
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.Task#updateOrCreate
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.Task#patchOrCreateWithWhere
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name LoopBack.Task#update
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name LoopBack.Task#destroyById
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.Task#removeById
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.Task#updateAttributes
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name LoopBack.Task#modelName
        * @propertyOf LoopBack.Task
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Task`.
        */
        R.modelName = "Task";


            /**
             * @ngdoc method
             * @name LoopBack.Task#eventId
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Fetches belongsTo relation eventId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.eventId = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::get::Task::eventId"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name LoopBack.Task.checklists
     * @header LoopBack.Task.checklists
     * @object
     * @description
     *
     * The object `Task.checklists` groups methods
     * manipulating `Checklist` instances related to `Task`.
     *
     * Call {@link LoopBack.Task#checklists Task.checklists()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name LoopBack.Task#checklists
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Queries checklists of Task.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R.checklists = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::get::Task::checklists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Task.checklists#count
             * @methodOf LoopBack.Task.checklists
             *
             * @description
             *
             * Counts checklists of Task.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.checklists.count = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::count::Task::checklists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Task.checklists#create
             * @methodOf LoopBack.Task.checklists
             *
             * @description
             *
             * Creates a new instance in checklists of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R.checklists.create = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::create::Task::checklists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Task.checklists#createMany
             * @methodOf LoopBack.Task.checklists
             *
             * @description
             *
             * Creates a new instance in checklists of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R.checklists.createMany = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::createMany::Task::checklists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Task.checklists#destroyAll
             * @methodOf LoopBack.Task.checklists
             *
             * @description
             *
             * Deletes all checklists of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.checklists.destroyAll = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::delete::Task::checklists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Task.checklists#destroyById
             * @methodOf LoopBack.Task.checklists
             *
             * @description
             *
             * Delete a related item by id for checklists.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for checklists
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.checklists.destroyById = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::destroyById::Task::checklists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Task.checklists#exists
             * @methodOf LoopBack.Task.checklists
             *
             * @description
             *
             * Check the existence of checklists relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for checklists
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R.checklists.exists = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::exists::Task::checklists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Task.checklists#findById
             * @methodOf LoopBack.Task.checklists
             *
             * @description
             *
             * Find a related item by id for checklists.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for checklists
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R.checklists.findById = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::findById::Task::checklists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Task.checklists#link
             * @methodOf LoopBack.Task.checklists
             *
             * @description
             *
             * Add a related item by id for checklists.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             *  - `fk` – `{*}` - Foreign key for checklists
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R.checklists.link = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::link::Task::checklists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Task.checklists#unlink
             * @methodOf LoopBack.Task.checklists
             *
             * @description
             *
             * Remove the checklists relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for checklists
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.checklists.unlink = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::unlink::Task::checklists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Task.checklists#updateById
             * @methodOf LoopBack.Task.checklists
             *
             * @description
             *
             * Update a related item by id for checklists.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             *  - `fk` – `{*}` - Foreign key for checklists
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R.checklists.updateById = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::updateById::Task::checklists"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name LoopBack.Checklist
 * @header LoopBack.Checklist
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Checklist` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Checklist",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Checklists/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Checklist.taskId() instead.
            "prototype$__get__taskId": {
              url: urlBase + "/Checklists/:id/taskId",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#create
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Checklists",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#createMany
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Checklists",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#patchOrCreate
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Checklists",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#replaceOrCreate
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Checklists/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#upsertWithWhere
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Checklists/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#exists
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Checklists/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#findById
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Checklists/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#replaceById
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Checklists/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#find
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Checklists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#findOne
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Checklists/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#updateAll
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Checklists/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#deleteById
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Checklists/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#count
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Checklists/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#prototype$patchAttributes
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Checklist id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Checklists/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#createChangeStream
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Checklists/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Task.checklists.findById() instead.
            "::findById::Task::checklists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tasks/:id/checklists/:fk",
              method: "GET",
            },

            // INTERNAL. Use Task.checklists.destroyById() instead.
            "::destroyById::Task::checklists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tasks/:id/checklists/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Task.checklists.updateById() instead.
            "::updateById::Task::checklists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tasks/:id/checklists/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Task.checklists.link() instead.
            "::link::Task::checklists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tasks/:id/checklists/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Task.checklists.unlink() instead.
            "::unlink::Task::checklists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tasks/:id/checklists/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Task.checklists.exists() instead.
            "::exists::Task::checklists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tasks/:id/checklists/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Task.checklists() instead.
            "::get::Task::checklists": {
              isArray: true,
              url: urlBase + "/Tasks/:id/checklists",
              method: "GET",
            },

            // INTERNAL. Use Task.checklists.create() instead.
            "::create::Task::checklists": {
              url: urlBase + "/Tasks/:id/checklists",
              method: "POST",
            },

            // INTERNAL. Use Task.checklists.createMany() instead.
            "::createMany::Task::checklists": {
              isArray: true,
              url: urlBase + "/Tasks/:id/checklists",
              method: "POST",
            },

            // INTERNAL. Use Task.checklists.destroyAll() instead.
            "::delete::Task::checklists": {
              url: urlBase + "/Tasks/:id/checklists",
              method: "DELETE",
            },

            // INTERNAL. Use Task.checklists.count() instead.
            "::count::Task::checklists": {
              url: urlBase + "/Tasks/:id/checklists/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name LoopBack.Checklist#upsert
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#updateOrCreate
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#patchOrCreateWithWhere
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#update
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#destroyById
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#removeById
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.Checklist#updateAttributes
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Checklist id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Checklist` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name LoopBack.Checklist#modelName
        * @propertyOf LoopBack.Checklist
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Checklist`.
        */
        R.modelName = "Checklist";


            /**
             * @ngdoc method
             * @name LoopBack.Checklist#taskId
             * @methodOf LoopBack.Checklist
             *
             * @description
             *
             * Fetches belongsTo relation taskId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Checklist id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R.taskId = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::get::Checklist::taskId"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name LoopBack.LoopBackResourceProvider
   * @header LoopBack.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name LoopBack.LoopBackResourceProvider#setAuthHeader
     * @methodOf LoopBack.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name LoopBack.LoopBackResourceProvider#getAuthHeader
     * @methodOf LoopBack.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name LoopBack.LoopBackResourceProvider#setUrlBase
     * @methodOf LoopBack.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name LoopBack.LoopBackResourceProvider#getUrlBase
     * @methodOf LoopBack.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
