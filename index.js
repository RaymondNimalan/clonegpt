//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

//import { Configuration, OpenAIApi } from 'openai';
const express = require('express');
const app = express();
const port = 3001;

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  organization: 'org-AHIUE2oiagZjyIJy3wE6HAsC',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

app.post('/', async (req, res) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say this is a test',
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  res.json({ data: response.data });
});

app.listen(port, () => {
  console.log('Server started on port 3001');
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
