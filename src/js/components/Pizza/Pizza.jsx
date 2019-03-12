import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as pizzaActions from "../../../actions/pizza";

export class Pizza extends Component {
  componentDidMount() {
    this.props.get_pizzas()
  }

  render() {
    return (
      <div>
        <br/>
        <h2>Available pizzas</h2>
        <ul className="list-group" style={{width: 18 + 'em'}}>
          {this.props.pizzas.data && this.props.pizzas.data.map(el => (
            <li className="list-group-item" key={el.id}>
              <div className="card">
                <div className="card-body">
                  <p className="card-text"> {el.name} </p>
                  <p className="card-text"> {el.price} </p>
                  <img className="card-img-top"
                       style={{width: 200, height: 200}}
                       src={el.image.url} alt="Pizza"/>
                  <p className="card-text"> {el.ingredients} </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pizzas: state.pizzas
  };
}

function mapDispatchToProps(dispatch) {
  return {
    delete_pizza: bindActionCreators((data) => pizzaActions.deletePizza(data), dispatch),
    get_pizzas: bindActionCreators((data) => pizzaActions.getPizzas(data), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pizza);
