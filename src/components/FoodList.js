import React from 'react'
import FoodItem from './FoodItem'
import image_3 from '../images/0f814b24-dbdd-48cc-8bd4-553011a78cd0.jpg'
import image_2 from '../images/e889e40d-8044-4275-baa7-a0ed70bd0bcd.jpg'
import image_1 from '../images/3bd3170d-e023-4f25-af6d-a2833ec50bef.jpg'


function FoodList(props) {
    const {addFoodItem} = props
    const fooditems = [
        {
            id:1,
            name:'Chicken-Burger',
            logo: image_1,
            price:450,
            rating:3,
            type:'non-veg'
        },
        {
            id:2,
            name:'Chicken-roll',
            logo: image_2,
            price:350,
            rating:4,
            type:'non-veg'
        },
        {
            id:3,
            name:'Chicken-Pizza',
            logo:image_3,
            price:550,
            rating:5,
            type:'non-veg'
        }
    ]
    const foodList = fooditems.map(
        item => <FoodItem key={item.id} foodItem={item} addFoodItem={addFoodItem}></FoodItem>)
    return (
        <div className="topContainer">
            {foodList}
        </div>
    )
}

export default FoodList

