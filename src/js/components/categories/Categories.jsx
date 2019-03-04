import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../../actions/category";
import toastr from "toastr"

export class Category extends Component {
  componentDidMount() {
    this.props.getCategories();
    toastr.success('Categories displayed successfully')
  }

  render() {
    return (
      <div>
        <h2>Pizza categories</h2>
        <ul className="list-group">
          {this.props.categories.map(el => (
            <li className="list-group-item" key={el.id}>{el.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

export default connect(
  mapStateToProps,
  { getCategories }
)(Category);
