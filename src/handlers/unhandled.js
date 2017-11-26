const unhandled = alexa => () => {
  const beginnings = [
    'I didn\'t get that',
    'I didn\'t catch that',
    'I wasn\'t listening',
  ];

  const endings = [
    'want to try again?',
    'want to have another go?',
    'why don\'t you try again?',
  ];

  const beginning = beginnings[Math.floor(Math.random() * 3)];
  const ending = endings[Math.floor(Math.random() * 3)];

  const speechOutput = `${beginning}, ${ending}`;

  alexa.emit(':ask', speechOutput, speechOutput);
};

export default unhandled;
