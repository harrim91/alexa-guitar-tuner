import launch from './launch';
import help from './help';
import defaultHandler from './default';
import playNote from './playNote';
import unhandled from './unhandled';

const handlers = (alexa, event) => ({
  LaunchRequest: launch(alexa),
  'AMAZON.HelpIntent': help(alexa),
  'AMAZON.CancelIntent': defaultHandler(alexa),
  'AMAZON.StopIntent': defaultHandler(alexa),
  SessionEndedRequest: defaultHandler(alexa),
  PlayNoteIntent: playNote(alexa, event),
  Unhandled: unhandled(alexa),
});

export default handlers;
