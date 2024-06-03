'use strict';

/**
 * application-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::application-list.application-list');
