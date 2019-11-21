import React from "react";
import "../styles/Regform.css";
import { Link } from "react-router-dom";

class Regform extends React.Component {
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

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit(event) {
    alert("Your account was created succesfully!!");
    event.preventDefault();
    const { name, email, password } = this.state;
    const user = {
      name,
      email,
      password
    };
    console.log(user);
  }

  render() {
    return (
      <div className="Regform">
          <br/><br/>
          <Link to='/'className='back'> Back</Link>
        <div className="reg-container">
          <img
            src={require("../images/VOD-app.png")}
            alt="reg-brand"
            className="brand-pic"
          />
          <h3 className="reg-text2">Register Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="name"
              className="name-box"
            />
            <br />
            <input
              type="email"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="e-mail"
              className="mail-box"
            />
            <br />
            <input
              type="password"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="password"
              className="pass-box"
            />
            <br />
            <input type="submit" value="Register" className="btn-submit" />
          </form>
          <Link to="/Login">
            <p className="log-text2">Do you have an account? Click here</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Regform;
