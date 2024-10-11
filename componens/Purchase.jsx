import React from 'react';
import { useMyCart } from '../Context/CartContex';
import { Link } from 'react-router-dom';

export default function Purchase() {
  const { cart } = useMyCart();

  // Aggregate total quantity and price
  const totalQuantity = cart.length;
  const totalPrice = cart.reduce((acc, item) => {
    return acc + parseFloat(item.price.replace('$', ''));
  }, 0);

  const buttonStyle = {
    height: "50px",
    width: "300px",
    backgroundColor: "purple",
    marginTop: "20%",
    color: "white",
  };

  return (
    <>
      <ul className='d-flex justify-content-around'>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.title} style={{ width: '100px', height: 'auto' }} />
            <br />
            <span>{item.title}</span>
            <br />
            <span>{item.price}</span>
            <br />
          </li>
        ))}
      </ul>
      <div className='text-center mt-5'>
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
     <Link to='/PaymentPortal' ><button style={buttonStyle} totalPrice={totalPrice}>Buy all</button></Link>  
      </div>
    </>
  );
}
