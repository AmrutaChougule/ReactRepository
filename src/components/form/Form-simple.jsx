import React, { Component } from "react";

import { connect } from "react-redux";
import * as contactAction from "../action/contactAction";
import Axios from "axios";
import "./form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        fname: "",
        lname: "",
        mobNo: "",
        email: "",
        country: "",
        gender: "",
        isChecked: false,
      },
    };
  }

  handleChnage = (e) => {
    let { name, value } = e.target;
    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
    });
  };

  onCheckChange = () => {
    this.setState({
      data: {
        ...this.state.data,
        isChecked: !this.state.data.isChecked,
      },
    });
  };
  onRadioChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        gender: e.target.value,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      user: this.state.data,
    };
    //this.props.addNewUser(user);

    // this.props.createNewUser(user);
  };
  deleteUser(e, index) {
    e.preventDefault();
   // this.props.deleteUser(index);
  }
  listView(data, index) {
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            Name: {data.user.fname} {data.user.lname}
            <br />
            Email: {data.user.email}
            <br />
            Mobile No: {data.user.mobNo}
            <br />
            Gender: {data.user.gender}
          </li>
        </div>
        <div className="col-md-2">
          <button
            onClick={(e) => this.deleteUser(e, index)}
            className="btn btn-danger"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
  render() {
    const hidden = this.state.data.checked ? "" : "hidden";
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group form-inline">
            <label className="col-sm-2">First Name</label>
            <input
              type="text"
              name="fname"
              placeholder="Enter First Name"
              value={this.state.data.fname}
              onChange={this.handleChnage}
              className="form-control"
            />

            <label className="col-sm-2">Last Name</label>
            <input
              type="text"
              name="lname"
              value={this.state.data.lname}
              onChange={this.handleChnage}
              className="form-control"
            />
          </div>
          <div className="form-group form-inline">
            <label className="col-sm-2">Mobile No</label>
            <input
              type="number"
              name="mobNo"
              placeholder="Enter Mobile No"
              value={this.state.data.mobNo}
              onChange={this.handleChnage}
              className="form-control"
            />

            <label className="col-sm-2">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={this.state.data.email}
              onChange={this.handleChnage}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <div className="form-row">
              <div className="col-md-4" onChange={this.onRadioChange}>
                <label className="col-sm-4">Gender</label>
                <input
                  type="radio"
                  placeholder="Male"
                  value="Male"
                  name="gender"
                />{" "}
                Male
                <input
                  type="radio"
                  placeholder="Female"
                  value="Female"
                  name="gender"
                />{" "}
                Female
                <input
                  type="radio"
                  placeholder="other"
                  value="Other"
                  name="gender"
                />{" "}
                Other
              </div>

              <label className="col-md-3">Country</label>
              <div className="dropdown ">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="country"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  India
                </button>
              </div>
            </div>
          </div>

          <div className="form-group form-row">
            <div className="col-md-5">
              <input
                type="checkbox"
                checked={this.state.data.isChecked}
                onChange={this.onCheckChange}
              />
              <label className="form-check-label">
                Check covid19 Cases in your area
              </label>
            </div>
          </div>

          <hr />
          {/* {
            <ul className="list-group">
              {this.props.users.map((user, i) => this.listView(user, i))}
            </ul>
          } */}
          <div>
            <button className="btn btn-primary">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     users: state.users,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//    // addNewUser: (user) => dispatch(contactAction.addNewUser(user)),
//     createNewUser: (user) => dispatch(contactAction.createNewUser(user)),
//   //  getAllUsers: (user) => dispatch(contactAction.getAllUsers(user)),
//     deleteUser: (index) => dispatch(contactAction.deleteUser(index)),
//   };
// };

export default Form;
