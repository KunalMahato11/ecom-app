import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handelChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className="sign-in__heading">I already have an account</h2>
				<span className="sign-in__subheading">Sign in with email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput type="email" name="email" value={this.state.email} handleChange={this.handelChange} label="Email" required />
					<FormInput name="password" type="password" value={this.state.password} handleChange={this.handelChange} label="Password" />

					<div className="buttons">
					<CustomButton type="submit"> Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
					</div>
				
				</form>
			</div>
		);
	}
}

export default SignIn;
