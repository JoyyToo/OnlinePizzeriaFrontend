import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/auth";

export class Register extends Component {
  componentDidMount() {
    this.props.register();
  }
  render() {
    return (
      null
    );
  }
}

export default connect(
    null,
    { register }
)(Register);
