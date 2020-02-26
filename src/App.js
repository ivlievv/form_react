import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      user: null
    };
  };

  handlerChange = e => {
    this.setState({
                    data: {
                      ...this.state.data,
                      [e.target.name]: e.target.value
                    },
                  });
  };

  submitHandler = e => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.data)
    };

    fetch('http://192.168.0.106:3000/authorization/sign_up', options)
      .then(response => response.json())
      .then(user => {
        this.setState({ user });
      })
      .catch(console.dir);
    e.preventDefault();
  };

  render () {
    return (

      <div className="container">
        <h2 className="authorization">Зареєструватися</h2>
        <div className="fullName">
          <input type="text" value={this.state.data.firstName}
                 onChange={this.handlerChange} placeholder="Имя" name="firstName"/>
          <input type="text" value={this.state.data.lastName}
                 onChange={this.handlerChange} placeholder="Фамилия" name="lastName"/>
        </div>
        <div className="userData">
          <input className="email" type="text" value={this.state.data.email}
                 onChange={this.handlerChange} placeholder="Email" name="email"/>
          <input className="password" type="text" value={this.state.data.password}
                 onChange={this.handlerChange} placeholder="Пароль" name="password"/>
        </div>

        <input className="button" type="button" onClick={this.submitHandler} value={'Sign up'}/>
      </div>

    );
  }

}

export default App;
