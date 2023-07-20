import React from 'react'

const Button = () => {
    const onClickButton = () => {
        alert()
    }
    return (
        <div>
            <button onClick={onClickButton}>Push This Button!!</button>
        </div>
    )
}

export default Button
