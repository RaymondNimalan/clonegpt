
//import { Configuration, OpenAIApi } from 'openai';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3221;

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  organization: 'org-AHIUE2oiagZjyIJy3wE6HAsC',
  apiKey: ,
});
const openai = new OpenAIApi(configuration);

app.post('/', async (req, res) => {
  const { message } = req.body;
  console.log('message sent to gpt', message);
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });
    //console.log('from post route', message);
    console.log('from post 2', response.data.choices);
    res.json({
      message: response.data.choices[0].text,
    });
  } catch (error) {
    console.log('error from post request', error);
  }

  //console.log(response.data.choices[0].text);
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
