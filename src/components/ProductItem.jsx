import '@styles/ProductItem.scss';
import React, { useContext } from 'react';
import addToCartImage from  '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext.js'

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick= item =>{
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div className='product-info-container'>
					<p>{product.title}</p>	
				</div>
				<figure onClick={()=>  handleClick(product)}>
					<img src={addToCartImage} alt="" />
				</figure>	
			</div>
			<p className='product-price'>${product.price}</p>
		</div>
	);
}

export default ProductItem;
