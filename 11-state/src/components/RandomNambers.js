import { useState } from "react"
import generateRandomNumber from "../utils/generateRandomNum"

function RandomNumbers ({maxNum}) {
  const [randomNum, setRandomNum] = useState(generateRandomNumber(maxNum))
  const changeRandomNum = () => {
    setRandomNum (generateRandomNumber(maxNum))
  }

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  )
}
export default RandomNumbers