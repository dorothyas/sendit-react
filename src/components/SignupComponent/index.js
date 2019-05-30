import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import registerAction from '../../actions/registerAction'

export class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password1: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.registerAction({ user_name: this.state.username, user_email: this.state.email, user_password: this.state.password, user_password1: this.state.password1 }, this.props)
    }

    componentWillReceiveProps(newProps) {
        console.log(this.props)
        if (newProps.isSuccessful === true) {
            this.props.history.push("/login")
        }
    }

    render() {
        return (
            <div>
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form className="signup" onSubmit={this.onSubmit}>
                            <h2>Create Account</h2>
                            <input type="text" name="username" value={this.state.username} placeholder="Name" onChange={this.onChange} />
                            <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.onChange} />
                            <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.onChange} />
                            <input type="password" name="password1" value={this.state.password1} placeholder="Re-enter Password" onChange={this.onChange} />
                            <button type="submit" value="submit" className="submit">Sign Up</button>
                            <br />
                            <span>Already have an account? <a href="#">Login</a></span>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export const mapStateToProps = state => ({
    token: state.signupReducer.token,
    errors: state.signupReducer.errors,
    isSuccessful: state.signupReducer.isSuccessful,
});

SignUpForm.propTypes = {
    token: PropTypes.string,
    errors: PropTypes.shape({
        email: PropTypes.any,
        password: PropTypes.any,
        error: PropTypes.any,
    }),

};

export default connect(mapStateToProps, { registerAction })(SignUpForm);
