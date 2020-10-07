import React, { Component } from "react";
import { connect } from 'react-redux';
import * as contactAction from "../action/contactAction";


class Contacts extends Component {
  constructor(props) {
      super(props)
    this.state = {
      name: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
        name: this.state.name
      }
     
      this.props.createContact(contact);


      this.setState({
        name: ''
      });
     
     
  };

  listView(data, index){
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
    </div> 
    )
  }

  deleteContact(e, index){
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {
    console.log("this.props.contact: ",this.props.contacts);
    return(
      <div className="container">
        <h1>Clientside Contacts Application</h1>
        <hr />
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/><br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
          <hr />
          { <ul className="list-group">
          {this.props.contacts.map((contact, i) => this.listView(contact, i))}
        </ul> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    console.log("mapStateToProps: ",state);
    return {
      contacts: state.contacts,
    }
    
  };
  
  const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps: ",dispatch);
    return {
        createContact: contact => dispatch(contactAction.createContact(contact)),
        deleteContact: index =>dispatch(contactAction.deleteContact(index))
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
