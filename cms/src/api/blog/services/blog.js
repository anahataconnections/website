'use strict';

/**
 * blog service
 */

const { createCoreService } = require('@admin/admin').factories;

module.exports = createCoreService('api::blog.blog');
