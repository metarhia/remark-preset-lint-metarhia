'use strict';

// Regex for the "no-file-name-irregular-characters" remark-lint rule.

module.exports = /[^a-zA-Z0-9-_.]|(?![A-Z])._|._(?![A-Z0-9])/;
