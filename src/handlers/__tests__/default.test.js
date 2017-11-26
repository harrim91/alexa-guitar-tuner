import defaultHandler from '../default';

const alexa = {
  emit: jest.fn(),
};

afterEach(() => {
  jest.clearAllMocks();
});

test('it emits an empty :tell action', () => {
  const handler = defaultHandler(alexa);

  handler();

  expect(alexa.emit).toHaveBeenCalledWith(':tell', '');
});
