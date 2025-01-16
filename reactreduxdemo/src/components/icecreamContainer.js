import React from 'react'
import {buyIceCream} from '../redux/icecreams/icecreamActions'
import {connect} from 'react-redux'

export const icecreamContainer = (props) => {
  return (
    <div>
        <h2>Number of icecreams - {props.numberofIceCreams}</h2>
        <button onClick = {props.buyIceCream}>buyIceCream</button>
    </div>
  )
}
const mapStateToProps = state =>{
    return{
        numberofIceCreams: state.icecream.numberofIceCreams
    }
}

const mapDispatchToProps = dispatch =>{
  return{
    buyIceCream :()=>dispatch(buyIceCream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(icecreamContainer)


