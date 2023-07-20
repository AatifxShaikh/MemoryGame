import React from 'react'
import MemoryGame from './MemoryGame'
import './MemoryGame.css'
//Main parent component we pass the images from the app to memorygame
const App = () => {
  const images = [
    'src/assets/images/ants-in-my-eyes-johnson.PNG',
    'src/assets/images/arthricia.png',
    'src/assets/images/background.png',
    'src/assets/images/balthromaw.PNG',
    'src/assets/images/beta-seven.PNG',
    'src/assets/images/birdperson.png',
    'src/assets/images/buff-summer.PNG',
    'src/assets/images/concerto.PNG',
    ' src/assets/images/cromulon.PNG', 'src/assets/images/devil.PNG', 'src/assets/images/doofus-rick.PNG', 'src/assets/images/dr-xenon-bloom.PNG', 'src/assets/images/fart.PNG', 'src/assets/images/garbage-goober.PNG', 'src/assets/images/gear-head.PNG', 'src/assets/images/glootie.PNG', 'src/assets/images/hepatitis-c.PNG', 'src/assets/images/jaguar.png', 'src/assets/images/jerry-mytholog.PNG', 'src/assets/images/jerry-prime.PNG', 'src/assets/images/jessica.PNG', 'src/assets/images/jesus.PNG', 'src/assets/images/king-jellybeam.PNG', 'src/assets/images/krombopulos-michael.PNG', 'src/assets/images/lighthouse-keeper.PNG', 'src/assets/images/gazorpazorpfield.PNG'
  ]
  return (
    <div>
      <h1>Memory Game</h1>
      <MemoryGame images={images} />
    </div>
  )
}

export default App