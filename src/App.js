import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts'
import { CartContext } from './contexts'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		// console.log()
		setCart(item)
	};

	return (
		
		<div className="App">
			{console.log(cart)}
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart}}>
					<Navigation/>
					{/* Routes */}
					<Route exact path="/">
						<Products/>
					</Route>

					<Route path="/cart">
						<ShoppingCart/>
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
