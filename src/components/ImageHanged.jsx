import image0 from '../assets/imgs/0.png'
import image1 from '../assets/imgs/1.png'
import image2 from '../assets/imgs/2.png'
import image3 from '../assets/imgs/3.png'
import image4 from '../assets/imgs/4.png'
import image5 from '../assets/imgs/5.png'
import image6 from '../assets/imgs/6.png'
import image7 from '../assets/imgs/7.png'
import image8 from '../assets/imgs/8.png'

const images = [image0, image1, image2, image3, image4, image5, image6, image7, image8].reverse()

function ImageHanged({ errorNumber }) {

  if (errorNumber >= 8) {
    errorNumber = 8
  }

  return (
    <img className="image-hangman" 
          src={images[errorNumber]} 
          alt="hangman" 
          width="300px"
    />
  )
}

export default ImageHanged