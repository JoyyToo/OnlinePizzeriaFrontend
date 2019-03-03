import React from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as authActions from "../../../actions/auth";
import { composeValidators } from "../validators/utils";
import { required } from "../validators";
import FormGenerator from "../common/FormGenerator"

const loginMetaData = [
  {
    name: 'email',
    validate: composeValidators(required),
    label: 'Email',
    type: 'email',
  },
  {
    name: 'password',
    validate: composeValidators(required),
    label: 'Password',
    type: 'password',
  },
];

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.login(data);
  }

  render() {
    return (
      <div>
        <FormGenerator
          formInputMetadata={loginMetaData}
          formTitle='Login Here'
          primaryButton='Sign In'
          secondaryButton='Sign Up'
          secondaryLink='/signup'
          onClickSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators((data) => authActions.login(data), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
