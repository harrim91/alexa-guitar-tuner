const launch = alexa => () => {
  const welcomeOutput = 'Welcome to Guitar Tuner. Ask me to play a note.';
  const welcomeReprompt = 'Ask me to play a note.';
  alexa.emit(':ask', welcomeOutput, welcomeReprompt);
};

export default launch;
