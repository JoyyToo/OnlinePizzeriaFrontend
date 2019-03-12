import React from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as categoryActions from "../../../actions/category";
import { composeValidators } from "../validators/utils";
import { required } from "../validators";
import FormGenerator from "../common/FormGenerator"

const categoryMetaData = [
  {
    name: 'name',
    validate: composeValidators(required),
    label: 'Category name',
    type: 'text',
  }
];

class AddCategory extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.add_category(data);
    this.props
      .history
      .push('/categories')
  }

  render() {
    return (
      <div>
        <FormGenerator
          formInputMetadata={categoryMetaData}
          formTitle='Add new Category'
          primaryButton='Submit'
          secondaryButton='Cancel'
          secondaryLink='/categories'
          onClickSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add_category: bindActionCreators((data) => categoryActions.addCategory(data), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
