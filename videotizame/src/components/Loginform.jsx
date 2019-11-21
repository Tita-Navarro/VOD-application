import React from "react";
import { Link } from "react-router-dom";
import "../styles/Logform.css";

class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = email => event => {
    this.setState({ [email]: event.target.value });
  };

  handleSubmit = event => {
    alert("Welcome back!");
    event.preventDefault();
  };
  render() {
    return (
      <div className="loginform">
          <br/> <br/>
          <Link to='/' className='back'>Back</Link>
        <div className="logform-container">
            <img src={require('../images/VOD-app.png')} alt='brand-log' className='brand-pic'/>
            <h3 className='login-text'>Sign in to start watching</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              value={this.state.value}
              onChange={this.handleChange}
              className="mail-box2"
              placeholder="e-mail"
            />
            <br />
            <input
              type="password"
              value={this.state.value}
              onChange={this.handleChange}
              className="pass-box"
              placeholder="password"
            />
            <br />
            <Link to="/Home">
              <input type="submit" value="Login" className='btn-submit'/>
            </Link>
            <Link to='/Register' className='log-text2'><p>Do you want to suscribe? Press here</p></Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Loginform;
