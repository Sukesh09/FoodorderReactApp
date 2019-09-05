import React from 'react'

const style = {
    fontSize:'18px',
    background:'white'
}
const buttonStyle = {
    fontSize:'18px',
    background:'orange',
    color:'white'
}

function Checkout(props) {
    const {onCheckoutClick} = props
    return (
        <div style={style}>
            <button style={buttonStyle} onClick={onCheckoutClick}>checkout</button>
        </div>
    )
}

export default Checkout
