import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as contactAction from "../action/contactAction";

import Button from "../styleComponents/globalStyleComponent";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.users.userList,
    };
  }

  componentDidMount = () => {
    this.props.getAllUsers();
  };

  listView(data, index) {
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            Name: {data.fname} {data.lname}
            <br />
            Email: {data.email}
            <br />
            Mobile No: {data.mobNo}
            <br />
            Gender: {data.gender}
          </li>
        </div>
        <div className="col-md-2">
          <Button onClick={(e) => this.deleteUser(e, index)} primary>
            Remove
          </Button>
        </div>
      </div>
    );
  }

  deleteUser(e, index) {
    e.preventDefault();
    this.props.deleteUser(index);
  }

  render() {
    console.log("after delete user list is ", this.props.users.userList);
    return (
      <div className="container">
        {
          <ul className="list-group">
            {this.props.users.userList.map((user, i) => this.listView(user, i))}
          </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("get all users: ", state);
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(contactAction.getAllUsers()),
    deleteUser: (index) => dispatch(contactAction.deleteUser(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
