const VALID_NOTES = ['e', 'a', 'd', 'g', 'b'];

const isValidNote = note => VALID_NOTES.some(n => n === note);

export const getNote = (note, pitch) => {
  const lowerNote = note && note.toLowerCase();
  const lowerPitch = pitch && pitch.toLowerCase();

  if (!isValidNote(lowerNote)) return 'Hmm, I don\'t know that note';

  if (lowerNote === 'e') {
    if (lowerPitch === 'high') return `Here's an E: <audio src="${process.env.NOTE_HIGH_E}" />`;
    return `Here's an E: <audio src="${process.env.NOTE_LOW_E}" />`;
  }
  if (lowerNote === 'a') return `Here's an A: <audio src="${process.env.NOTE_A}" />`;
  if (lowerNote === 'd') return `Here's a D: <audio src="${process.env.NOTE_D}" />`;
  if (lowerNote === 'g') return `Here's a G: <audio src="${process.env.NOTE_G}" />`;

  return `Here's a B: <audio src="${process.env.NOTE_B}" />`;
};

export const randomNote = () => {
  const i = Math.floor(Math.random() * VALID_NOTES.length);
  const note = VALID_NOTES[i];
  if (note === 'a' || note === 'e') return `an ${note}.`;
  return `a ${note}.`;
};
