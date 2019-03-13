import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as pizzaActions from "../../../actions/pizza";
import { composeValidators } from "../validators/utils";
import { required } from "../validators";
import FormGenerator from "../common/FormGenerator"

const pizzaMetaData = [
  {
    name: 'name',
    validate: composeValidators(required),
    label: 'Pizza name',
    type: 'text',
  },
  {
    name: 'price',
    validate: composeValidators(required),
    label: 'Price',
    type: 'integer',
  },
  {
    name: 'ingredients[0]',
    label: 'Ingredients',
    type: 'array',
  },
  {
    name: 'image.url',
    label: 'Image',
    type: 'file',
  }
];

class AddPizza extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.add_pizza(data, this.props.match.params['category_id'] );
    this.props
      .history
      .push(`/category/${this.props.match.params['category_id']}/all_pizzas`)
  }

  render() {
    return (
      <div>
        <FormGenerator
          formInputMetadata={pizzaMetaData}
          formTitle='Add New Pizza'
          primaryButton='Submit'
          secondaryButton='Cancel'
          secondaryLink='/all_pizzas'
          onClickSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pizza: state.pizzas
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add_pizza: bindActionCreators((data, category_id) => pizzaActions.addPizza(data, category_id), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPizza);
