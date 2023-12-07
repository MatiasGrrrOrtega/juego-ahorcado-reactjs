function ButtonOption({ index, letter, cheackLetter, buttonActive }) {
  return (
    <li key={index} className="letter">
      {
          <button className={buttonActive ? 'activo' : 'ocultar'} 
                  onClick={()=> cheackLetter(letter)}>
            {letter}
          </button>
      }
    </li>
  )
}

export default ButtonOption