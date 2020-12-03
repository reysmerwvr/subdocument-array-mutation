/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

const { expect } = require('code');
const lab = require('lab').script();
exports.lab = lab;
const generateUpdateStatement = require('../../utils/generateUpdateStatement')
const {
  documentMock,
  mutationObjectMock1,
  updateOutputMock1,
} = require('../../test/__mocks__/subdocuments')

const { test, suite } = lab;

suite('generateUpdateStatement', () => {
	test('should return update statement', () => {
    expect(generateUpdateStatement(documentMock, mutationObjectMock1)).to.equal(updateOutputMock1)
  });
});
