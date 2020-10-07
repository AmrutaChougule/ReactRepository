import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as contactAction from "../action/contactAction";
import Button from "../styleComponents/globalStyleComponent";

class ReviewDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.users.newUser,
    };
  }

  componentDidMount = () => {
    this.props.getNewUser();
    console.log("new user is :this.props:  ", this.props);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewUser(this.props.users.newUser);
    this.props.history.push("/Users");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group form-inline">
            <label className="col-sm-2">First Name</label>
            {this.state.data.fname}

            <label className="col-sm-2">Last Name</label>
            {this.state.data.lname}
          </div>
          <div className="form-group form-inline">
            <label className="col-sm-2">Mobile No</label>
            {this.state.data.mobNo}

            <label className="col-sm-2">Email</label>
            {this.state.data.email}
          </div>

          <div className="form-group">
            <div className="form-row">
              <div className="col-md-4" onChange={this.onRadioChange}>
                <label className="col-sm-4">Gender</label>
                {this.state.data.gender}
              </div>

              <label className="col-md-3">Country</label>
              <div className="dropdown ">India</div>
            </div>
          </div>

          {/* <div className="form-group form-row">
            <div className="col-md-5">
             
              <label className="form-check-label">
                Check covid19 Cases in your area
              </label>
            </div>
          </div> */}

          <hr />

          <div className="col-md-12">
            <Link to="/Form" className="col-md-6">
              <Button >Back</Button>
            </Link>
            <Link to="/Users" className="col-md-6">
              <Button onClick={this.handleSubmit} primary>
                Next
              </Button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNewUser: () => dispatch(contactAction.getNewUser()),
    addNewUser: (user) => dispatch(contactAction.addNewUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetails);
