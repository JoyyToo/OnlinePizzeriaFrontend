import React from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as authActions from "../../../actions/auth";
import RegisterForm from "../Auth/RegisterForm"

class AuthPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        auth: Object.assign({}, this.props.auth),
        errors: {}
    };

    this.updateAuthState = this.updateAuthState.bind(this);
    this.register = this.register.bind(this);
  }

  register(e) {
    const data = {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
    }
    e.preventDefault();
    this.props.register(data);
  }

  updateAuthState(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <RegisterForm
        onChange={this.updateAuthState}
        onSave={this.register}
        state={this.state}
        errors={this.state.errors}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
      register: bindActionCreators((data) => authActions.register(data), dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
