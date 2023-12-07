import React from 'react'

function Answer({ win, lose, word }) {
  return (
    <div>
        {win && <h1>¡Felicidades Ganaste!</h1>}
        {lose && <h1>¡Perdiste! La palabra era: {word}</h1>}
    </div>
  )
}

export default Answer