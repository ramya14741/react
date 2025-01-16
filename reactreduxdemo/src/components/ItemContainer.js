import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'
import { buyIceCream } from '../redux/icecreams/icecreamActions'

function ItemContainer(props) {
  return (
    <div>
        <h2>
            Item - {props.item}
        </h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps =(state,ownProps)=>{
const itemState = ownProps.cake? state.cake.numberOfCakes : state.icecream.numberofIceCreams
return{
    item: itemState
}
}

const mapDispatchToProps =(dispatch,ownProps)=>{
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()):()=>dispatch(buyIceCream())
    return{
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, // we can pass null if we dont want to connect 
    mapDispatchToProps)(ItemContainer)