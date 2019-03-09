import React from 'react';
import { connect } from 'react-redux';

import { signInUser } from '../actions/home';

export class Home extends React.Component {
	
	signIn(username, password) {
		signInUser(username, password);
	}

	render() {
		return ();
	}
}

const mapStateToProps = state => ({
	signedIn: state.home.signedIn || false,
	menu: state.home.menu || false
});

export default connect(mapStateToProps)(Home);