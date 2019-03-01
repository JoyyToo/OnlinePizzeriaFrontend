import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../actions/category";

export class Category extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    return (
      <ul className="list-group">
        {this.props.categories.map(el => (
          <li className="list-group-item" key={el.id}>{el.name}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.remoteCategories
  };
}

export default connect(
  mapStateToProps,
  { getCategories }
)(Category);
