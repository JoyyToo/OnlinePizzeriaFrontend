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
  }

  render() {
    return (
      <div>
        <RegisterForm
        auth={this.state.auth}
        errors={this.state.errors}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
    let auth = {email: '', username: '', password: ''};
    return {
        auth: auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(authActions, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
