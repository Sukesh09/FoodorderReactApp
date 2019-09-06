import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import FoodItem from './FoodItem'


function FoodList(props) {
    const [fooditems, setFood] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:5000/foodItems')
        .then(res => {
          console.log(res)  
          setFood(res.data.data.items.taco)
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

