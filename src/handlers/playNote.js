import { getNote } from '../lib/guitar-tuner';

const ENDS_WITH_FULL_STOP_PATTERN = /\.$/;
const endsWithFullStop = string => ENDS_WITH_FULL_STOP_PATTERN.test(string);

const playNote = (alexa, event) => () => {
  const pitch = event.request.intent.slots.pitch.value;
  let note = event.request.intent.slots.note.value;

  if (note && endsWithFullStop(note)) note = note.replace(ENDS_WITH_FULL_STOP_PATTERN, '');

  const speechOutput = getNote(note, pitch);

  alexa.emit(':tell', speechOutput);
};

export default playNote;
