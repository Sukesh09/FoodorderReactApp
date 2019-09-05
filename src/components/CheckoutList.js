import React from 'react'
import FoodItem from './FoodItem'
import CheckoutItem from './CheckoutItem';


function CheckoutList(props) {
    const {addFoodItem,onRemoveItem,checkoutItems} = props
    
    const foodList = checkoutItems.map(
        item => <CheckoutItem key={item.id} foodItem={item} onRemoveItem={onRemoveItem} addFoodItem={addFoodItem}></CheckoutItem>)
    return (
        <div className='cartContainer'>
            {foodList}
        </div>
    )
}

export default CheckoutList