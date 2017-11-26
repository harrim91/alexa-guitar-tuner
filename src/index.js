import Alexa from 'alexa-sdk';
import handlers from './handlers';

export const handler = (event, context) => {
  const alexa = Alexa.handler(event, context);
  alexa.APP_ID = process.env.SKILL_ID;
  alexa.registerHandlers(handlers(alexa, event));
  alexa.execute();
};

export default handler;
