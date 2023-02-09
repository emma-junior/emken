import React from 'react'
import "./button.scss"

interface Props {
  text:string
}
const Button = ({text}:Props) => {
  return (
    <button>{text}</button>
  )
}

export default Button