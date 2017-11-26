const defaultHandler = alexa => () => {
  const speechOutput = '';
  alexa.emit(':tell', speechOutput);
};

export default defaultHandler;
