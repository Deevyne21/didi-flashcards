import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>My React Flashcard Quiz-App</h1>
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What Language is React based on?",
    answer: "Javascript",
  },

  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },

  {
    id: 3458,
    question: "Who developed React?",
    answer: "Facebook (Meta)",
  },
  {
    id: 3459,
    question: "What is used to style React components?",
    answer: "CSS",
  },
  {
    id: 3460,
    question: "What is the command to create a new React app using Vite?",
    answer: "npm create vite@latest",
  },
  {
    id: 3461,
    question:
      "What React feature allows you to manage state in functional components?",
    answer: "Hooks",
  },
  {
    id: 3462,
    question: "Which hook is used to manage state in React?",
    answer: "useState",
  },
  {
    id: 3463,
    question: "What does JSX stand for?",
    answer: "JavaScript XML",
  },
  {
    id: 3464,
    question: "Which hook is used for handling side effects in React?",
    answer: "useEffect",
  },
  {
    id: 3465,
    question:
      "What is used to pass data from a parent component to a child component?",
    answer: "Props",
  },
  {
    id: 3466,
    question:
      "What do we called an input element that is completely synchronised with state?",
    answer: "Controlled Element",
  },

  {
    id: 3467,
    question: "What is the purpose of the Virtual DOM in React?",
    answer: "To improve performance by efficiently updating the real DOM",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
