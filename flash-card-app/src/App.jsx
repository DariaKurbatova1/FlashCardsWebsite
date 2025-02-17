import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlashCard from './FlashCard'
import { flashcards } from './flashcards'

function App() {

  return (
    <>
      <h1>Flash Cards</h1>
      <div className="flashcards-container">
        {flashcards.map((card, index) => (
          <FlashCard key={index} question={card.question} answer={card.answer} />
        ))}
      </div>
    </>
  )
}

export default App
