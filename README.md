## Game "Who wants to become a millionaire"
The task is provided by [Siema](https://siema.com.ua/)
[See a result](https://millionere-game.vercel.app/)

Comments:
- Personally I prefer not to have an a default import but it was required use eslint/airbnb in the task

### Installation
Install the dependencies and devDependencies and start the server.

```sh
cd client
npm i
npm run start
```

For production environments:

```sh
npm run build
```

### Task:

It is necessary to implement the basic functionality of the game "Who wants to become a millionaire":

- the player takes turns answering one of the 12 questions;

- each question has 4 possible answers and only one is correct;

- if the answer is correct, the player gets to the next question;

- if the answer is incorrect, the player gets to the final screen;

- on the final screen you need to show the overall result of the game;

- layout design is provided. The layout should be adaptive.

### [**Design**](https://www.figma.com/file/ZYdlTGtyDWE6Df3SMZ5NaW/Front-end-test)

Technical requirements:

- use this layout for layout:

- make the layout adaptive (from iPhone 5 to 4k displays);

- do the layout without using CSS frameworks;

- the game config (questions, answers, money for the correct answer, etc.) must be in json format;

- the config should be expandable: more or fewer answers to the question; several correct answers, etc.;
- the task is implemented using the latest version of Reactos;

- all client code must fully comply with the eslint/airbnb out-of-the-box rules.

**__Make all client code typed via TypeScript.__**

### License

MIT
