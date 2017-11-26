import launch from '../launch';

const alexa = {
  emit: jest.fn(),
};

afterEach(() => {
  jest.clearAllMocks();
});

test('it emits an :ask action telling the user to ask to play a note', () => {
  const handler = launch(alexa);

  handler();

  expect(alexa.emit).toHaveBeenCalledWith(
    ':ask',
    'Welcome to Guitar Tuner. Ask me to play a note.',
    'Ask me to play a note.',
  );
});
