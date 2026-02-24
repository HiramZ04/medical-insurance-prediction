const ort = require('onnxruntime-node');
const path = require('path');

let inferenceSession = null;

async function getSession() {
  if (!inferenceSession) {
    console.log('Loading ONNX model to memory...');
    const modelPath = path.join(__dirname, 'model.onnx');
    inferenceSession = await ort.InferenceSession.create(modelPath);
  }
  return inferenceSession;
}

const FLOAT_FIELDS = [
  'age', 'dependents', 'bmi', 'visits_last_year', 'hospitalizations_last_3yrs', 'medication_count', 'deductible', 'copay',
  'chronic_count', 'hypertension', 'diabetes', 'cardiovascular_disease', 'arthritis', 'mental_health', 'had_major_procedure',
];

const STRING_FIELDS = ['sex', 'region', 'smoker', 'plan_type', 'network_tier'];

function buildFeeds(inputData) {
  const feeds = {};
  FLOAT_FIELDS.forEach(field => {
    feeds[field] = new ort.Tensor('float32', new Float32Array([inputData[field]]), [1, 1]);
  });
  STRING_FIELDS.forEach(field => {
    feeds[field] = new ort.Tensor('string', [inputData[field]], [1, 1]);
  });
  return feeds;
}

async function runInference(inputData) {
  const session = await getSession();
  const feeds = buildFeeds(inputData);

  const results = await session.run(feeds);
  return results.variable.data;
}

module.exports = { runInference };