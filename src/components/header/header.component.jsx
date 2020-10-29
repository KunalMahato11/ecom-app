import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/clothing-store.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import './header.styles.scss';


const Header = ({ currentUser }) => (
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
	</div>
);

const mapStateToProp = (state) => ({
	currentUser : state.user.currentUser
})


export default connect(mapStateToProp)(Header);



