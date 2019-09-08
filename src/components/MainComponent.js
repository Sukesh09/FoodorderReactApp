import React, { Component } from 'react'
import FoodList from './FoodList';
import Login from './Login';
import Checkout from './Checkout';
import CheckoutScreen from './CheckoutScreen';
import FoodList_Dessert from './FoodList_Desserts'
import FoodList_Pizza from './FoodList_Pizza'
import FoodList_Taco from './FoodList_Taco'
import Axios from 'axios'

class MainComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             checkoutItems : [],
             total : 0,
             isEmpty : true
        }

        this.addFoodItem = this.addFoodItem.bind(this)
        this.onCheckoutClick = this.onCheckoutClick.bind(this)
        this.onClearItems = this.onClearItems.bind(this)
    }

    addFoodItem(foodItem) {
        //alert(`hello ${foodItem.name}`)
        this.onAddItem(foodItem)
        console.log(this.state.checkoutItems)
    }

    onAddItem = (foodItem) => {
        this.setState(state => {
          const checkoutItems = [...state.checkoutItems, foodItem]
          let total = 0
          checkoutItems.forEach(element => {
            total = total + element.price
          });
          this.state.total = total
          console.log("Total price : "+total)
          return {
            checkoutItems
          }
        })
      }

    // onRemoveItem = (foodItem) => {
    //   this.setState(state => {
    //     state.checkoutItems.remove(foodItem)
    //   })
    // }
    
    onRemoveItem = (foodItem) => {
      this.setState(state => {
        const list = state.checkoutItems.filter((item, j) => foodItem.id !== j);
        return {
          list,
        };
      });
    };

    onCheckoutClick(){
            if(this.state.total===0){
              alert(`cart is empty`)
            }else {
              Axios.get('http://localhost:5000/placeOrder')
              .then(res => {
                console.log(res)  
                alert(res.data)
               // alert(`Please pay : ${this.state.total}`)
              })
              .catch(error => {
                console.log(error)  
              })
            }
    }
    onClearItems = () => {
        this.setState({ checkoutItems: [], total: 0 })
        console.log(this.state.checkoutItems)
    }

    render() {       
            return(
            <div className="App-header">
            <Login></Login>
            <p>---------------------------------------Burgers------------------------------------------</p>
            <FoodList addFoodItem={this.addFoodItem}></FoodList>
            <p>-------------------------------------------Desserts--------------------------------------</p>
            <FoodList_Dessert addFoodItem={this.addFoodItem}></FoodList_Dessert>
            <p>----------------------------------------Pizza-----------------------------------------</p>
            <FoodList_Pizza addFoodItem={this.addFoodItem}></FoodList_Pizza>
            <p>----------------------------------------Taco-----------------------------------------</p>
            <FoodList_Taco addFoodItem={this.addFoodItem}></FoodList_Taco>
            <p>----------------------------------------Checkout Items-----------------------------------------</p>
            <CheckoutScreen onRemoveItem={this.onRemoveItem} addFoodItem={this.addFoodItem} checkoutItems={this.state.checkoutItems}></CheckoutScreen>
            <p>Total : {this.state.total}</p>
            <Checkout onCheckoutClick={this.onCheckoutClick}></Checkout>
            <p></p>
            <button type="button" onClick={this.onClearItems}>Clear</button>
            <p></p>
          </div>  
          )
    }
}

export default MainComponent
