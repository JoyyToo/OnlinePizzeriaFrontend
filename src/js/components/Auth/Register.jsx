import React from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as authActions from "../../../actions/auth";
import { composeValidators } from "../validators/utils";
import { required } from "../validators";
import FormGenerator from "../common/FormGenerator"

const signupMetaData = [
  {
    name: 'email',
    validate: composeValidators(required),
    label: 'Email',
    type: 'email',
  },
  {
    name: 'username',
    validate: composeValidators(required),
    label: 'Username',
    type: 'text',
  },
  {
    name: 'password',
    validate: composeValidators(required),
    label: 'Password',
    type: 'password',
  },
];

class AuthPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.register(data);
  }

  render() {
    return (
      <div>
        <FormGenerator
          formInputMetadata={signupMetaData}
          formTitle='Register Here'
          primaryButton='Sign Up'
          secondaryButton='Sign In'
          secondaryLink='/login'
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
      register: bindActionCreators((data) => authActions.register(data), dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
