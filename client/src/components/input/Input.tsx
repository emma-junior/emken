import React from 'react'
import "./input.scss"

interface Props {
  name: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({name, handleInput}:Props) => {
  return (
    <div className='input-wrapper'>
        <input name={name} type={name} onChange={(event) => handleInput(event)} />
        <label htmlFor="name" className='label-name'>
            <span className='content-name'>{name}</span>        
        </label>
    </div>
  )
}

export default Input