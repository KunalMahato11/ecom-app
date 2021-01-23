import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/clothing-store.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from  '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>

		<div className="options">
			<Link className="option mr" to="/shop">SHOP</Link>
			<Link className="option mr" to="/contact">CONTACT</Link>

			{
				currentUser ? 
				<div className="option" onClick={() => auth.signOut()}>
					Sign Out
				</div> 
				:
				<Link className="option" to = "/signin">
				Sign In
				</Link>
			}
			<CartIcon />
		</div>
		{
			hidden ? null : <CartDropDown />
		}
	</div>
);

const mapStateToProp = createStructuredSelector({
	currentUser : selectCurrentUser,
	hidden : selectCartHidden
})


export default connect(mapStateToProp)(Header);



