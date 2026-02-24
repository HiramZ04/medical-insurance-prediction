const express = require('express');
const router = express.Router();
const { InferenceSchema } = require('../features/inference/schema');
const { runInference } = require('../features/inference/inferenceModel');

router.post('/v1/inference', async (req, res) => {
  const validation = InferenceSchema.safeParse(req.body);
  if (!validation.success) {
    const validationErrors = validation.error.issues.map(issue => ({
      field: issue.path.join('.'),
      message: issue.message
    }));
    return res.status(400).json({ errors: validationErrors });
  }

  try {
    const response = await runInference(validation.data);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;