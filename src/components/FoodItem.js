import React from 'react'

const heading = {
    fontSize:'22px',
    color:'orange'
}

const imageStyle = {
    width:'120px',
    height:'120px'
}

const boader = {
    padding:'10px'
}

function FoodItem(props) {
    const {foodItem,addFoodItem} = props
    return (
        <div style={boader}>
            <img src={foodItem.logo} style={imageStyle}/>
            <h3 style={heading}>{foodItem.name}</h3>
            <p>Rating : {foodItem.rating}</p>
            <p>Price : {foodItem.price}</p>
            <button onClick={() => addFoodItem(foodItem)}>Add</button>
            <p></p>
        </div>
    )
}

export default FoodItem
