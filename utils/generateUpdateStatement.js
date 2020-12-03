/**
 *
 * Author:  Reysmer Valle
 *
 * License: MIT - Copyright (c) Reysmer Valle
 *
 */

/**
 * generate update statement
 *
 * @since 1.0.0
 * @param    {Object} document Original document
 * @param    {Object} mutation Describes only what needs updating in the original document
 * @returns  {Object} update statement
 */

const { ID, DELETE, ADD, REMOVE, UPDATE } = require("../utils/constants");

let updateStatement, updateStatementObject, localStatementObject, index, action;

const generateUpdateStatement = (document, mutation) => {
  for (let key in mutation) {
    updateStatement = updateStatement ? `${updateStatement}.${key}` : key;
    const mutationArray = mutation[key];
    for (let mutationElement of mutationArray) {
      if (
        !mutationElement.hasOwnProperty(ID) &&
        Object.keys(mutationElement).length <= 1
      ) {
        localStatementObject = getUpdateStatementObject(
          ADD,
          updateStatement,
          mutationArray
        );
        updateStatementObjectValue();
      } else {
        buildUpdateStatementObject({
          document,
          rootKey: key,
          statement: updateStatement,
          mutationElement,
        });
      }
    }
  }
  return updateStatementObject;
};

const findIndexById = (documentArray, id) => {
  const isEqualToId = (element) => element[ID] === id;
  return documentArray.findIndex(isEqualToId);
};

const getUpdateStatementObject = (action, updateStatement, mutationObject) => ({
  [action]: { [updateStatement]: mutationObject },
});

const updateStatementObjectValue = () => {
  updateStatementObject = !updateStatementObject
    ? localStatementObject
    : { ...updateStatementObject, ...localStatementObject };
};

const buildUpdateStatementObject = ({
  document,
  rootKey,
  statement,
  mutationElement,
}) => {
  for (let key in mutationElement) {
    if ([ID, DELETE].indexOf(key) !== -1) {
      action = key === ID ? UPDATE : REMOVE;
      index = findIndexById(document[rootKey], mutationElement[ID]);
      updateStatement = `${statement}.${index}`;
      if (key === DELETE) {
        localStatementObject = getUpdateStatementObject(
          action,
          updateStatement,
          mutationElement[key]
        );
        updateStatementObjectValue();
      }
    } else if (Array.isArray(mutationElement[key])) {
      generateUpdateStatement(document[rootKey][index], {
        [key]: mutationElement[key],
      });
    } else {
      updateStatement = `${updateStatement}.${key}`;
      localStatementObject = getUpdateStatementObject(
        action,
        updateStatement,
        mutationElement[key]
      );
      updateStatementObjectValue();
    }
  }
  return updateStatementObject;
};

module.exports = generateUpdateStatement;
