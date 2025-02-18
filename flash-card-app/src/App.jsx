import { useState } from 'react';
import './App.css';
import FlashCard from './FlashCard';
import { flashcards } from './flashcards';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first card
    }
  };

  return (
    <div className="App">
      <h1>Flash Cards</h1>
      <div className="flashcards-container">
        <FlashCard 
          question={flashcards[currentIndex].question} 
          answer={flashcards[currentIndex].answer} 
        />
      </div>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
