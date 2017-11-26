import { LambdaServer, BSTAlexa } from 'bespoken-tools';

let alexa;
let server;

beforeEach((done) => {
  server = new LambdaServer('./lambda/custom/index.js', 10000);
  alexa = new BSTAlexa('http://localhost:10000');

  server.start(() => {
    alexa.start(() => {
      done();
    });
  });
});

afterEach((done) => {
  alexa.stop(() => {
    server.stop(() => {
      done();
    });
  });
});

test('it returns the markup for a low E when no pitch is passed', () => {
  alexa.spoken('for an {E}', (err, payload) => {
    expect(err).toBeNull();
    expect(payload.response.outputSpeech.ssml).toEqual(`<speak> Here's an E: <audio src="${process.env.NOTE_LOW_E}" /> </speak>`);
  });
});

test('it returns the markup for a low E when pitch is passed', () => {
  alexa.spoken('for a {low} {E}', (err, payload) => {
    expect(err).toBeNull();
    expect(payload.response.outputSpeech.ssml).toEqual(`<speak> Here's an E: <audio src="${process.env.NOTE_LOW_E}" /> </speak>`);
  });
});

test('it returns the markup for an A', () => {
  alexa.spoken('for an {A}', (err, payload) => {
    expect(err).toBeNull();
    expect(payload.response.outputSpeech.ssml).toEqual(`<speak> Here's an A: <audio src="${process.env.NOTE_A}" /> </speak>`);
  });
});

test('it returns the markup for a D', () => {
  alexa.spoken('for a {D}', (err, payload) => {
    expect(err).toBeNull();
    expect(payload.response.outputSpeech.ssml).toEqual(`<speak> Here's a D: <audio src="${process.env.NOTE_D}" /> </speak>`);
  });
});

test('it returns the markup for a G', () => {
  alexa.spoken('for a {G}', (err, payload) => {
    expect(err).toBeNull();
    expect(payload.response.outputSpeech.ssml).toEqual(`<speak> Here's a G: <audio src="${process.env.NOTE_G}" /> </speak>`);
  });
});

test('it returns the markup for a B', () => {
  alexa.spoken('for a {B}', (err, payload) => {
    expect(err).toBeNull();
    expect(payload.response.outputSpeech.ssml).toEqual(`<speak> Here's a B: <audio src="${process.env.NOTE_B}" /> </speak>`);
  });
});

test('it returns the markup for a high E', () => {
  alexa.spoken('for a {high} {E}', (err, payload) => {
    expect(err).toBeNull();
    expect(payload.response.outputSpeech.ssml).toEqual(`<speak> Here's an E: <audio src="${process.env.NOTE_HIGH_E}" /> </speak>`);
  });
});

test('it handles unknown notes', () => {
  alexa.spoken('for a {foo} {bar}', (err, payload) => {
    expect(err).toBeNull();
    expect(payload.response.outputSpeech.ssml).toEqual('<speak> Hmm, I don\'t know that note </speak>');
  });
});

