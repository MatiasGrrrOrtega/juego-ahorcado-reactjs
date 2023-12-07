import { letters } from "../data/Letters"
import ButtonOption from "../components/ButtonOption"

function ButtonOptionList({ cheackLetter, buttonActive }) {
  return (
    <ul className="option_list">
    {
      letters.map((letter, index) => {
        return (
          <ButtonOption key={index} 
                        letter={letter} 
                        cheackLetter={cheackLetter}
                        buttonActive={buttonActive}
                        />
        )
      })
    }
    </ul>
  )
}

export default ButtonOptionList