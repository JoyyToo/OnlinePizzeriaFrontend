import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {bindActionCreators} from "redux";
import * as categoryActions from "../../../actions/category";

export class Category extends Component {
  componentDidMount() {
    this.props.get_categories();
  }

  render() {
    return (
      <div>
        <br />
        <Link to='add_category'>
          <button className='btn btn-primary'>Add Category</button>
        </Link>
        <h2>
          Pizza categories
          <span role="img"  aria-label=''> 🥑</span>
        </h2>
        <div className="col-md-4">
          <ul className="list-group">
            {this.props.categories && this.props.categories.map(el => (
              <li className="list-group-item" key={el.id}><Link to={`category/${el.id}/all_pizzas`}>{el.name}</Link>
                <div className="btn-toolbar pull-right" key={el.id}>
                  <Link to={`/categories/${el.id}`} className="btn btn-primary">Edit</Link>
                  <button className="btn btn-danger" onClick={()=>this.props.delete_category(el.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    delete_category: bindActionCreators((data) => categoryActions.deleteCategory(data), dispatch),
    get_categories: bindActionCreators((data) => categoryActions.getCategories(data), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
