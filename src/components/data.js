export const questions = [
  {
    questionNumber: 1,
    question:
      "If you want to import just the Component from the React library, what syntax do you use?",
    options: [
      "import React.Component from react",
      "import [ Component ] from react",
      "import Component from react",
      "import { Component } from react",
    ],
    answer: "import { Component } from react",
  },
  {
    questionNumber: 2,
    question:
      "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
    options: [
      "Wrap it in the React.memo higher-order component.",
      "Implement the useReducer Hook.",
      "Implement the useMemo Hook.",
      "Implement the shouldComponentUpdate lifecycle method.",
    ],
    answer: "Wrap it in the React.memo higher-order component.",
  },
  {
    questionNumber: 3,
    question: "What is the testing library most often associated with React?",
    options: ["Mocha", "Chai", "Sinon", "Jest"],
    answer: "Jest",
  },
  {
    questionNumber: 4,
    question:
      "How do you handle passing through the component tree without having to pass props down manually at every level?",
    options: ["React Send", "React Pinpoint", "React Router", "React Context"],
    answer: "React Context",
  },
  {
    questionNumber: 5,
    question:
      "What is the name of the tool used to take JSX and turn it into createElement calls?",
    options: ["JSX Editor", "ReactDOM", "Browser Buddy", "Babel"],
    answer: "Babel",
  },
];
