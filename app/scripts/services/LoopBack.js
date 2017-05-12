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
             * @name LoopBack.Eventmanager#prototype$verify
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Eventmanager id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
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
            "prototype$verify": {
              url: urlBase + "/Eventmanagers/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#confirm
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
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

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#setPassword
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Reset user's password via a password-reset token.
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
            "setPassword": {
              url: urlBase + "/Eventmanagers/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Eventmanager#prototype$getCollaboratings
             * @methodOf LoopBack.Eventmanager
             *
             * @description
             *
             * Get collaborating instances.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
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
             * Instances of events
             */
            "prototype$getCollaboratings": {
              isArray: true,
              url: urlBase + "/Eventmanagers/:id/getCollaboratings",
              method: "GET",
            },

            // INTERNAL. Use Event.eventManagerId() instead.
            "::get::Event::eventManagerId": {
              url: urlBase + "/Events/:id/eventManagerId",
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

            // INTERNAL. Use Event.eventManagerId() instead.
            "prototype$__get__eventManagerId": {
              url: urlBase + "/Events/:id/eventManagerId",
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

            // INTERNAL. Use Event.vendor.findById() instead.
            "prototype$__findById__vendor": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/vendor/:fk",
              method: "GET",
            },

            // INTERNAL. Use Event.vendor.destroyById() instead.
            "prototype$__destroyById__vendor": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/vendor/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Event.vendor.updateById() instead.
            "prototype$__updateById__vendor": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/vendor/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Event.vendor.link() instead.
            "prototype$__link__vendor": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/vendor/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Event.vendor.unlink() instead.
            "prototype$__unlink__vendor": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/vendor/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Event.vendor.exists() instead.
            "prototype$__exists__vendor": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/vendor/rel/:fk",
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

            // INTERNAL. Use Event.vendor() instead.
            "prototype$__get__vendor": {
              isArray: true,
              url: urlBase + "/Events/:id/vendor",
              method: "GET",
            },

            // INTERNAL. Use Event.vendor.create() instead.
            "prototype$__create__vendor": {
              url: urlBase + "/Events/:id/vendor",
              method: "POST",
            },

            // INTERNAL. Use Event.vendor.destroyAll() instead.
            "prototype$__delete__vendor": {
              url: urlBase + "/Events/:id/vendor",
              method: "DELETE",
            },

            // INTERNAL. Use Event.vendor.count() instead.
            "prototype$__count__vendor": {
              url: urlBase + "/Events/:id/vendor/count",
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

            /**
             * @ngdoc method
             * @name LoopBack.Event#prototype$invite
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Sends email to collaborate
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "prototype$invite": {
              url: urlBase + "/Events/:id/invite",
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

            // INTERNAL. Use Task.event() instead.
            "::get::Task::event": {
              url: urlBase + "/Tasks/:id/event",
              method: "GET",
            },

            // INTERNAL. Use Vendor.event() instead.
            "::get::Vendor::event": {
              url: urlBase + "/Vendors/:id/event",
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
             * @name LoopBack.Event#eventManagerId
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Fetches belongsTo relation eventManagerId.
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
        R.eventManagerId = function() {
          var TargetResource = $injector.get("Eventmanager");
          var action = TargetResource["::get::Event::eventManagerId"];
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
    /**
     * @ngdoc object
     * @name LoopBack.Event.vendor
     * @header LoopBack.Event.vendor
     * @object
     * @description
     *
     * The object `Event.vendor` groups methods
     * manipulating `Vendor` instances related to `Event`.
     *
     * Call {@link LoopBack.Event#vendor Event.vendor()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name LoopBack.Event#vendor
             * @methodOf LoopBack.Event
             *
             * @description
             *
             * Queries vendor of Event.
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
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
        R.vendor = function() {
          var TargetResource = $injector.get("Vendor");
          var action = TargetResource["::get::Event::vendor"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.vendor#count
             * @methodOf LoopBack.Event.vendor
             *
             * @description
             *
             * Counts vendor of Event.
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
        R.vendor.count = function() {
          var TargetResource = $injector.get("Vendor");
          var action = TargetResource["::count::Event::vendor"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.vendor#create
             * @methodOf LoopBack.Event.vendor
             *
             * @description
             *
             * Creates a new instance in vendor of this model.
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
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
        R.vendor.create = function() {
          var TargetResource = $injector.get("Vendor");
          var action = TargetResource["::create::Event::vendor"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.vendor#createMany
             * @methodOf LoopBack.Event.vendor
             *
             * @description
             *
             * Creates a new instance in vendor of this model.
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
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
        R.vendor.createMany = function() {
          var TargetResource = $injector.get("Vendor");
          var action = TargetResource["::createMany::Event::vendor"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.vendor#destroyAll
             * @methodOf LoopBack.Event.vendor
             *
             * @description
             *
             * Deletes all vendor of this model.
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
        R.vendor.destroyAll = function() {
          var TargetResource = $injector.get("Vendor");
          var action = TargetResource["::delete::Event::vendor"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.vendor#destroyById
             * @methodOf LoopBack.Event.vendor
             *
             * @description
             *
             * Delete a related item by id for vendor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for vendor
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
        R.vendor.destroyById = function() {
          var TargetResource = $injector.get("Vendor");
          var action = TargetResource["::destroyById::Event::vendor"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.vendor#exists
             * @methodOf LoopBack.Event.vendor
             *
             * @description
             *
             * Check the existence of vendor relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for vendor
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
        R.vendor.exists = function() {
          var TargetResource = $injector.get("Vendor");
          var action = TargetResource["::exists::Event::vendor"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.vendor#findById
             * @methodOf LoopBack.Event.vendor
             *
             * @description
             *
             * Find a related item by id for vendor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for vendor
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
        R.vendor.findById = function() {
          var TargetResource = $injector.get("Vendor");
          var action = TargetResource["::findById::Event::vendor"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.vendor#link
             * @methodOf LoopBack.Event.vendor
             *
             * @description
             *
             * Add a related item by id for vendor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `fk` – `{*}` - Foreign key for vendor
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
             * This usually means the response is a `Vendor` object.)
             * </em>
             */
        R.vendor.link = function() {
          var TargetResource = $injector.get("Vendor");
          var action = TargetResource["::link::Event::vendor"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.vendor#unlink
             * @methodOf LoopBack.Event.vendor
             *
             * @description
             *
             * Remove the vendor relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for vendor
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
        R.vendor.unlink = function() {
          var TargetResource = $injector.get("Vendor");
          var action = TargetResource["::unlink::Event::vendor"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name LoopBack.Event.vendor#updateById
             * @methodOf LoopBack.Event.vendor
             *
             * @description
             *
             * Update a related item by id for vendor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Event id
             *
             *  - `fk` – `{*}` - Foreign key for vendor
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
        R.vendor.updateById = function() {
          var TargetResource = $injector.get("Vendor");
          var action = TargetResource["::updateById::Event::vendor"];
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

            // INTERNAL. Use Task.event() instead.
            "prototype$__get__event": {
              url: urlBase + "/Tasks/:id/event",
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
             * @name LoopBack.Task#event
             * @methodOf LoopBack.Task
             *
             * @description
             *
             * Fetches belongsTo relation event.
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
        R.event = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::get::Task::event"];
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

            // INTERNAL. Use Vendor.event() instead.
            "prototype$__get__event": {
              url: urlBase + "/Vendors/:id/event",
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

            // INTERNAL. Use Event.vendor.findById() instead.
            "::findById::Event::vendor": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/vendor/:fk",
              method: "GET",
            },

            // INTERNAL. Use Event.vendor.destroyById() instead.
            "::destroyById::Event::vendor": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/vendor/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Event.vendor.updateById() instead.
            "::updateById::Event::vendor": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/vendor/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Event.vendor.link() instead.
            "::link::Event::vendor": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/vendor/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Event.vendor.unlink() instead.
            "::unlink::Event::vendor": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/vendor/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Event.vendor.exists() instead.
            "::exists::Event::vendor": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Events/:id/vendor/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Event.vendor() instead.
            "::get::Event::vendor": {
              isArray: true,
              url: urlBase + "/Events/:id/vendor",
              method: "GET",
            },

            // INTERNAL. Use Event.vendor.create() instead.
            "::create::Event::vendor": {
              url: urlBase + "/Events/:id/vendor",
              method: "POST",
            },

            // INTERNAL. Use Event.vendor.createMany() instead.
            "::createMany::Event::vendor": {
              isArray: true,
              url: urlBase + "/Events/:id/vendor",
              method: "POST",
            },

            // INTERNAL. Use Event.vendor.destroyAll() instead.
            "::delete::Event::vendor": {
              url: urlBase + "/Events/:id/vendor",
              method: "DELETE",
            },

            // INTERNAL. Use Event.vendor.count() instead.
            "::count::Event::vendor": {
              url: urlBase + "/Events/:id/vendor/count",
              method: "GET",
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
        * @ngdoc property
        * @name LoopBack.Vendor#modelName
        * @propertyOf LoopBack.Vendor
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Vendor`.
        */
        R.modelName = "Vendor";


            /**
             * @ngdoc method
             * @name LoopBack.Vendor#event
             * @methodOf LoopBack.Vendor
             *
             * @description
             *
             * Fetches belongsTo relation event.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Vendor id
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
        R.event = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::get::Vendor::event"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name LoopBack.Attachment
 * @header LoopBack.Attachment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Attachment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Attachment",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Attachments/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name LoopBack.Attachment#getContainers
             * @methodOf LoopBack.Attachment
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
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
             * This usually means the response is a `Attachment` object.)
             * </em>
             */
            "getContainers": {
              isArray: true,
              url: urlBase + "/Attachments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Attachment#createContainer
             * @methodOf LoopBack.Attachment
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Attachment` object.)
             * </em>
             */
            "createContainer": {
              url: urlBase + "/Attachments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Attachment#destroyContainer
             * @methodOf LoopBack.Attachment
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
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
             *  - `` – `{undefined=}` -
             */
            "destroyContainer": {
              url: urlBase + "/Attachments/:container",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Attachment#getContainer
             * @methodOf LoopBack.Attachment
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
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
             * This usually means the response is a `Attachment` object.)
             * </em>
             */
            "getContainer": {
              url: urlBase + "/Attachments/:container",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Attachment#getFiles
             * @methodOf LoopBack.Attachment
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
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
             * This usually means the response is a `Attachment` object.)
             * </em>
             */
            "getFiles": {
              isArray: true,
              url: urlBase + "/Attachments/:container/files",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Attachment#getFile
             * @methodOf LoopBack.Attachment
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
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
             * This usually means the response is a `Attachment` object.)
             * </em>
             */
            "getFile": {
              url: urlBase + "/Attachments/:container/files/:file",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Attachment#removeFile
             * @methodOf LoopBack.Attachment
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
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
             *  - `` – `{undefined=}` -
             */
            "removeFile": {
              url: urlBase + "/Attachments/:container/files/:file",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Attachment#upload
             * @methodOf LoopBack.Attachment
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
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
             *  - `result` – `{object=}` -
             */
            "upload": {
              url: urlBase + "/Attachments/:container/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Attachment#download
             * @methodOf LoopBack.Attachment
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
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
            "download": {
              url: urlBase + "/Attachments/:container/download/:file",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name LoopBack.Attachment#modelName
        * @propertyOf LoopBack.Attachment
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Attachment`.
        */
        R.modelName = "Attachment";



        return R;
      }]);

/**
 * @ngdoc object
 * @name LoopBack.Email
 * @header LoopBack.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Email",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/emails/:id",
          { 'id': '@id' },
          {
          }
        );




        /**
        * @ngdoc property
        * @name LoopBack.Email#modelName
        * @propertyOf LoopBack.Email
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Email`.
        */
        R.modelName = "Email";



        return R;
      }]);

/**
 * @ngdoc object
 * @name LoopBack.Collaborator
 * @header LoopBack.Collaborator
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Collaborator` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Collaborator",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Collaborators/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#create
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Collaborators",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#createMany
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Collaborators",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#patchOrCreate
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Collaborators",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#replaceOrCreate
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Collaborators/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#upsertWithWhere
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Collaborators/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#exists
             * @methodOf LoopBack.Collaborator
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
              url: urlBase + "/Collaborators/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#findById
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Collaborators/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#replaceById
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Collaborators/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#find
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Collaborators",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#findOne
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Collaborators/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#updateAll
             * @methodOf LoopBack.Collaborator
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
              url: urlBase + "/Collaborators/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#deleteById
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Collaborators/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#count
             * @methodOf LoopBack.Collaborator
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
              url: urlBase + "/Collaborators/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#prototype$patchAttributes
             * @methodOf LoopBack.Collaborator
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Collaborator id
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Collaborators/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#createChangeStream
             * @methodOf LoopBack.Collaborator
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
              url: urlBase + "/Collaborators/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#upsert
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#updateOrCreate
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#patchOrCreateWithWhere
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#update
             * @methodOf LoopBack.Collaborator
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
             * @name LoopBack.Collaborator#destroyById
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#removeById
             * @methodOf LoopBack.Collaborator
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name LoopBack.Collaborator#updateAttributes
             * @methodOf LoopBack.Collaborator
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Collaborator id
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
             * This usually means the response is a `Collaborator` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name LoopBack.Collaborator#modelName
        * @propertyOf LoopBack.Collaborator
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Collaborator`.
        */
        R.modelName = "Collaborator";



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
