import './Form.css'
import { useState } from 'react'

export default function Form() {
  const [colorpicker, setColorPicker] = useState('')


  const handleColorChange = (e) => {
    setColorPicker(e.target.value)
  }

  const changeColor = (e) => {
    e.preventDefault()
    document.body.style.backgroundColor = colorpicker
  }

  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" />

        <label htmlFor="contactEmail">Contact Email:</label>
        <input type="email" id="contactEmail" name="contactEmail" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="colorPicker">Choose a Color:</label>
        <input type="color" id="colorPicker" name="colorPicker" onChange={handleColorChange} />

        <button onClick={changeColor}>Change Color</button>
      </form>
    </div>
  )
}
