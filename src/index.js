import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: null,
      };
    }
    
    changeHandler = (event) => {
      this.setState({[event.target.name]: event.target.value}); // rerenders components on changes
    }

    submitHandler = (event) => {
      //event.preventDefault();

      let username = this.state.username;
      let validcharacters = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for (let i = 0, l = username.length; i < l; i++) {
          if (validcharacters.indexOf(username.substr(i, 1)) === -1) {
              alert("Username must contain only numbers and letters with no spaces");
              break;
          }
      }

      let age = this.state.age;
      if (!Number(age) && age != null) {
        alert("Your age must be a number");
      }
    }

    render() {
      return (
        <form onSubmit={this.submitHandler}>
            <h1>Hi {this.state.username}</h1>
                <p>Enter your username:</p>
                    <input
                        type='text'
                        name='username'
                        onChange={this.changeHandler}
                    />
                <p>Enter your age:</p>
            <input
                type='text'
                name='age'
                onChange={this.changeHandler}
            />
            <br/>
            <input type='submit' />
        </form>
      );
    }
  }
  
  ReactDOM.render(<Form />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
