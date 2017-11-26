import playNote from '../playNote';
import { getNote } from '../../lib/guitar-tuner';

jest.mock('../../lib/guitar-tuner');

const alexa = {
  emit: jest.fn(),
};

afterEach(() => {
  jest.clearAllMocks();
});

test('it emits a :tell action with the value of getNote with the note and pitch slots', () => {
  const note = 'foo';
  const pitch = 'bar';
  const event = {
    request: {
      intent: {
        slots: {
          note: { value: note },
          pitch: { value: pitch },
        },
      },
    },
  };

  getNote.mockImplementation((n, p) => ({ note: n, pitch: p }));

  const handler = playNote(alexa, event);

  handler();

  expect(alexa.emit).toHaveBeenCalledWith(
    ':tell',
    { note, pitch },
  );
});
