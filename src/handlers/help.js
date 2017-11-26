import { randomNote } from '../lib/guitar-tuner';

const help = alexa => () => {
  const speechOutput = `You can ask me to play any note of a guitar in standard tuning. For example, say Alexa ask guitar tuner to play ${randomNote()}`;
  alexa.emit(':tell', speechOutput);
};

export default help;
