import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        errormessage: '',
      };
    }
    
    changeHandler = (event) => {
      this.setState({[event.target.name]: event.target.value}); // updates components on changes
    }

    submitHandler = (event) => {
      event.preventDefault();
      let err = '';
      let username = this.state.username;
      let l = username.length;
      if (l > 16) {
        err = <strong>Username too long</strong>;
      }
      let validcharacters = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for (let i = 0; i < l; i++) {
          if (validcharacters.indexOf(username.substr(i, 1)) === -1) {
              err = <strong>Username invalid</strong>;
              //alert("Username must contain only numbers and letters with no spaces");
              break;
          }
      }
      this.setState({errormessage: err});
    }

    render() {
      const {fading} = this.state;
      return (
        <form onSubmit={this.submitHandler}>
            <h1>Welcome </h1>
                <p>Please enter your username:</p>
                    <input
                        type='text'
                        name='username'
                        onChange={this.changeHandler}
                    />
            <br/> 
            <span class="note"> {this.state.errormessage} </span>
            <br/> <br/>
            <button class="btn"> Validate </button>
        </form>
      );
    }
  }
  
  ReactDOM.render(<Form />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
