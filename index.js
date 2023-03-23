//import { Configuration, OpenAIApi } from 'openai';
const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
console.log(process.env);

const port = 7653;

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  organization: 'org-AHIUE2oiagZjyIJy3wE6HAsC',
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get('/models', async (req, res) => {
  const response = await openai.listModels();
  //console.log('response', response.data.data);
  res.json(response.data.data);
});

app.post('/', async (req, res) => {
  const { message, currentModel } = req.body;
  console.log('hello from post request');
  console.log('body.message', message);
  console.log('body.currentModel', currentModel);

  try {
    const response = await openai.createCompletion({
      model: `${currentModel}`, //'text-davinci-003'
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });
    console.log('from post 2', response.data.choices);
    res.json({
      message: response.data.choices[0].text,
    });
  } catch (error) {
    console.log('error from post request', error);
  }
});

app.listen(port, () => {
  console.log('Server started on port 3221');
});

//const response = await openai.listEngines();

// Response from openAI
// const response = await openai.createCompletion({
//   model: 'text-davinci-003',
//   prompt: 'Say this is a test',
//   max_tokens: 7,
//   temperature: 0,
// });

// way to test api by running - node index.js in terminal
// async function callApi() {
//   const response = await openai.createCompletion({
//     model: 'text-davinci-003',
//     prompt: 'Say this is a test',
//     max_tokens: 7,
//     temperature: 0,
//   });
//   console.log(response.data.choices[0].text);
// }
// callApi();
