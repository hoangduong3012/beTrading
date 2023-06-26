'use strict';

/**
 * shortcuts service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shortcuts.shortcuts');
