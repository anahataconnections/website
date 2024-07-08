'use strict';

/**
 * tagline router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tagline.tagline');
