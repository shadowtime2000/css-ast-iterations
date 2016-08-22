/* eslint max-len: ["error", 100, 2] */

// Stylesheet Level (root)
const findAllRules = require('./core/findAllRules');
const findAllRulesByType = require('./core/findAllRulesByType');
const findAllSelectors = require('./core/findAllSelectors');
const findAllImport = require('./core/findAllImport');
const findAllDeclarations = require('./core/findAllDeclarations');
const findAllDeclarationsBySelectors = require('./core/findAllDeclarationsBySelectors');
const findAllDeclarationsByProperty = require('./core/findAllDeclarationsByProperty');
const findAllDeclarationsByValue = require('./core/findAllDeclarationsByValue');

// Rule Level
const findDeclarations = require('./core/findDeclarations');
const findDeclarationsBySelectors = require('./core/findDeclarationsBySelectors');
const findDeclarationsByProperty = require('./core/findDeclarationsByProperty');
const findDeclarationsByValue = require('./core/findDeclarationsByValue');

// Declarations Level
const addDeclaration = require('./core/addDeclaration');
const removeDeclaration = require('./core/removeDeclaration');

const addIterations = (astRoot) => {

  // Stylesheet Level (root)
  findAllRules(astRoot);
  findAllRulesByType(astRoot);
  findAllSelectors(astRoot);
  findAllImport(astRoot);
  findAllDeclarations(astRoot);
  findAllDeclarationsBySelectors(astRoot);
  findAllDeclarationsByProperty(astRoot);
  findAllDeclarationsByValue(astRoot);

  // Rule Level
  findDeclarations(astRoot);
  findDeclarationsBySelectors(astRoot);
  findDeclarationsByProperty(astRoot);
  findDeclarationsByValue(astRoot);

  // Declarations Level
  addDeclaration(astRoot);
  removeDeclaration(astRoot);

};

module.exports = addIterations;
