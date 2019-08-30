import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Form extends React.Component {
  state = {
    username: '',
    valid: true,
    message: '',
    msgType: 'hide',
  };

    constructor(props) {
      super(props);
    }
    
    changeHandler = (event) => {
      this.setState({[event.target.name]: event.target.value}); // updates components on changes
    }

    submitHandler = (event) => {
      event.preventDefault();
      let msg = '';
      let isValid = true;
      let username = this.state.username;
      let l = username.length;
      if (l === 0) {
        msg = <strong> Please enter a username </strong>;
        isValid = false;
      } else if (l > 16) {
        msg = <strong> Username too long </strong>;
        isValid = false;
      } else {
        let validcharacters = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < l; i++) {
          if (validcharacters.indexOf(username.substr(i, 1)) === -1) {
            msg = <strong> Username must contain only numbers and letters </strong>;
            isValid = false;
            break;
          }
        }
      }

      const state = {
        valid: isValid,
        message: msg
      }

      if (isValid) {
        state.msg = <strong>Username is valid </strong>;
        state.msgType = 'showValid';
      } else {
        state.msgType = 'showInvalid';
      }

      this.setState(state);

    }


    showNotification = () => {
      if (this.state.valid) {
        this.setState({
          msgType: 'showValid',
        });
      } else {
        this.setState({
          msgType: 'showInvalid',
        });
      }
      setTimeout(() => {
        this.setState({
          msgType: 'hide',
        });
      }, 1000);
    }

    render() {
      return (
        <form onSubmit={this.submitHandler}>
            <h1> Welcome </h1>
                <p> Please enter your username: </p>
                    <input
                        type='text'
                        name='username'
                        onChange={this.changeHandler}
                    />
            <br/> 
            <div className={this.state.msgType}> {this.state.message} </div>            
            <br/> <br/>
            <button onClick={this.showNotification} className="btn"> Validate </button>
            
        </form>
      );
    }
  }

  ReactDOM.render(<Form />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
