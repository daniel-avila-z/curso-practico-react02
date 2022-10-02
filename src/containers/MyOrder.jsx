import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg';
import AppContext from '@context/AppContext';

const MyOrder = () => {
	const { state }= useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price
		const sum = state.cart.reduce(reducer, 0)
		return sum
	};
	console.table(sumTotal())
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
				<div className="seccion-scroll">
					{
						state.cart.map( (product, index) => (
							// <OrderItem
							// 	key={`orderItem-${index}-${product.id}`}
							// 	product={ product } 
							// />
							<OrderItem 
								indexValue={index}
								key={index}
								product={product} 
								/>
						) )
					}
				</div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			
		</aside>
	);
}

export default MyOrder;