import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import FoodItem from './FoodItem'
import image_3 from '../images/0f814b24-dbdd-48cc-8bd4-553011a78cd0.jpg'
import image_2 from '../images/e889e40d-8044-4275-baa7-a0ed70bd0bcd.jpg'
import image_1 from '../images/3bd3170d-e023-4f25-af6d-a2833ec50bef.jpg'


function FoodList(props) {
    const [fooditems, setFood] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:5000/foodItems')
        .then(res => {
          console.log(res)  
          setFood(res.data.data.items.pizza)
        })
        .catch(error => {
          console.log(error)  
        })
    })

    const {addFoodItem} = props
    
    const foodList_burger = fooditems.map(
        item => <FoodItem key={item.id} foodItem={item} addFoodItem={addFoodItem}></FoodItem>)
        
    return (
        <div className="topContainer">
            {foodList_burger}
        </div>
    )
}

export default FoodList

