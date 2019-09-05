import React, { Component } from 'react'
import CheckoutList from './CheckoutList';

class CheckoutScreen extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             total : 0
        }
    }
    
    
    render() {
        return (
            <div>
               <CheckoutList onRemoveItem={this.props.onRemoveItem} addFoodItem={this.props.addFoodItem} checkoutItems={this.props.checkoutItems}></CheckoutList>
               <p></p>
            </div>
        )
    }
}

export default CheckoutScreen
