import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa'

const Card = ({cardDetails}) => {
  console.log(cardDetails);
  return (
    <div class="card"> 
        <img src={require(`../img/${cardDetails.image}`)} alt="lol"/>
        <div class="name">{cardDetails.title}</div>
        <div class="prize"><span class="rupee">Rs{cardDetails.price} </span> / <span class="stripe">stripe</span></div>
        <div class="pharma">{cardDetails.details.pharmacyName} </div>
        <div class="address">{cardDetails.details.address}</div>
        <div class="contact">
            <FaTelegramPlane/>
            Contact Supplier
        </div>
    </div>
  )
}

export default Card