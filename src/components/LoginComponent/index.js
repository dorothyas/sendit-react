import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import loginAction from '../../actions/loginAction';
import PropTypes from "prop-types";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.loginAction({ user_name: this.state.username, user_password: this.state.password }, this.props)
    }
    componentWillReceiveProps(newProps) {
        console.log(this.props)
        if (newProps.isSuccessful === true) {
            this.props.history.push("/parcels")
        }
    }
    render() {
        return (
            <div>
                <div>
                    <div className="container" id="container">
                        <div className="form-container sign-up-container">
                            <form action="#" className="login-form" onSubmit={this.onSubmit}>
                                <h1>Welcome Back!</h1>
                                <h2>Sign In</h2>
                                <input type="text" name="username" value={this.state.username} placeholder="Name" onChange={this.onChange} />
                                <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.onChange} min="8"/>
                                <button>Sign in</button>
                                <br />
                                <div><Link to='/register' className="link">Don't Have an account? SignUp here.</Link></div>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}


export const mapStateToProps = state => ({
    token: state.loginReducer.token,
    errors: state.loginReducer.errors,
    isSuccessful: state.loginReducer.isSuccessful,
});

LoginForm.propTypes = {
    token: PropTypes.string,
    errors: PropTypes.shape({
        email: PropTypes.any,
        password: PropTypes.any,
        error: PropTypes.any,
    }),
}
export default connect(mapStateToProps, {loginAction}) (LoginForm);
