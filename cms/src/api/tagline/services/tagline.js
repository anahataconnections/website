'use strict';

/**
 * tagline service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tagline.tagline');
