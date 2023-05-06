'use strict';

/**
 * example-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::example-type.example-type');
