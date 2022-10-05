import React,{ useContext } from 'react';
import '@styles/OrderItem.scss';
// import {bike} from '@images/bike';
import close from '@icons/icon_close.png';
import AppContext from '@context/AppContext'

const OrderItem = ({ product,  indexValue }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove =  indexValue => {
		removeFromCart( indexValue )
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={close} alt="close" onClick={()=> handleRemove( indexValue )} />
		</div>
	);
}

export default OrderItem;
