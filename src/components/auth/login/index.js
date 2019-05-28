import React, { Component } from 'react';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';

import './index.css';

import LOGO from "../../../images/logo.png";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        
        return (
            <div>
                <div className={classNames('container')}>
                    <div className={classNames('form-login')}>
                        <img className={classNames('logo')} src={LOGO} alt={"Logo"} />
                        <div className={classNames('form-content')}>
                            <h2>Sign in</h2>
                            <p>to continue to Skype</p>
                            <TextField
                                className={classNames('textField')}
                                placeholder="Phone, Email, or Skype"
                                style={{width : 480}}
                            />
                        </div>
                    </div>
                </div>
                <div className={classNames('footer')}/>
            </div>
        );
    }
}



export default Login;