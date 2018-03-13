import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login_form';

export function LoginPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/home" />;
    }

    return (
        <div className="page_styling">

            <h2 className="text_effect">Login In</h2>

            <LoginForm />
          <h5>Not have an account yet?  <Link to="/register"><span className="link_red">Register</span></Link></h5>
            <div>
                <h4>DEMO ACCOUNT</h4>
                username: test <br/>
                password: password123
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);