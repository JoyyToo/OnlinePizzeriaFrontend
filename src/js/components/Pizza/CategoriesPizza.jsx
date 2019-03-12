import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as pizzaActions from "../../../actions/pizza";

class CategoriesPizza extends React.Component {
  componentDidMount() {
    this.props.get_category_pizzas(this.props.match.params['category_id'])
  }

  render() {
    return (
      <div>
        <br/>
        <Link to={`pizzas`}>
          <button className='btn btn-primary'>Add Pizza</button>
        </Link>
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
                  <Link to={`/pizza/${el.id}`} className="btn btn-primary">Edit</Link>
                  &nbsp;
                  <button className="btn btn-danger" onClick={
                    ()=>this.props.delete_pizza(el.id)}>Delete</button>
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
    get_category_pizzas: bindActionCreators((category_id) =>
      pizzaActions.getCategoryPizzas(category_id), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPizza);
