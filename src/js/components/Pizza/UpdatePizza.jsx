import React from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
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
    validate: composeValidators(required),
    label: 'Ingredients',
    type: 'array',
  },
  {
    name: 'image.url',
    label: 'Image',
    type: 'file',
  }
];

class UpdatePizza extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.update_pizza(data, this.props.match.params['id'] );
    this.props
      .history
      .push('/all_pizzas')
  }

  render() {
    return (
      <div>
        <FormGenerator
          formInputMetadata={pizzaMetaData}
          formTitle='Update Pizza Details'
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
    update_pizza: bindActionCreators((data, id) => pizzaActions.updatePizza(data, id), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePizza);
