import { useState } from "react";
import './FlashCard.css';

export default function FlashCard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashCard" onClick={() => setFlipped(!flipped)}>
      <p className="">{flipped ? answer : question}</p>
    </div>
  );
}
