import help from '../help';
import { randomNote } from '../../lib/guitar-tuner';

jest.mock('../../lib/guitar-tuner');

const alexa = {
  emit: jest.fn(),
};

afterEach(() => {
  jest.clearAllMocks();
});

test('it emits a :tell action with the help message and a random note', () => {
  randomNote.mockImplementation(() => 'foo');

  const handler = help(alexa);

  handler();

  expect(alexa.emit).toHaveBeenCalledWith(
    ':tell',
    'You can ask me to play any note of a guitar in standard tuning. For example, say Alexa ask guitar tuner to play foo',
  );
});
