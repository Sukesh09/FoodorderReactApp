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

function CheckoutItem(props) {
    const {foodItem,addFoodItem,onRemoveItem} = props
    return (
        <table style={boader}>
            <tr>
            <th style={boader}><img src={foodItem.imageUrl} style={imageStyle}/></th>
            <th style={boader}><h3 style={heading}>{foodItem.name}</h3></th>
            {/* <p>Rating : {foodItem.rating}</p> */}
            <th style={boader}><p>Price : {foodItem.price}</p></th>
            <th style={boader}><button onClick={() => addFoodItem(foodItem)}>Add More</button></th>
            {/* <th style={boader}><button onClick={() => onRemoveItem(foodItem)}>Remove</button></th> */}
            <p></p>
            </tr>
        </table>
    )
}

export default CheckoutItem