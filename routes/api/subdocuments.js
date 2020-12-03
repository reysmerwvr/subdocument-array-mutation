/**
 *
 * Author:  Reysmer Valle
 *
 * License: MIT - Copyright (c) Reysmer Valle
 *
 */
const Joi         = require('joi');
const router      = require('express').Router();
const auth        = require('../auth');
const generateUpdateStatement = require('../../utils/generateUpdateStatement');

const documentSchema = Joi.object();
const mutationSchema = Joi.object();

router.post('/mutations', auth.optional, async (req, res) => {
  const { body: { document, mutation } } = req;
  const documentValidation = Joi.validate(document, documentSchema);
  const mutationValidation = Joi.validate(mutation, mutationSchema);
  if(documentValidation.error || mutationValidation.error){
		return res.status(422).json({
			errors: result.error
    });
  }
  const output = generateUpdateStatement(document, mutation)
  return res.json({ output });
});

module.exports = router;