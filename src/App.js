import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form/Form";
import MouseClickEvent from "./components/hoc/MouseClickEvent";
import ButtonClickEvent from "./components/hoc/ButtonClickEvent";
import Contacts from "./components/reduxContact/Contacts";
import HocComponent from "./components/hoc/HocComponent";
import Users from "./components/users/Users";
import Header from "./components/header/header";
import Parent from "./components/Parent/parent";
import ReviewDetails from "./components/reviewDetails/ReviewDetails";
import history from "./history"
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter history={history}>
      <Header></Header>
      <Route exact path="/" component={HocComponent} />
      <Route path="/form" component={Form} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/reviewDetails" component={ReviewDetails} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/parent" component={Parent} />
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="App">
//       {/* <MouseClickEvent></MouseClickEvent>
//       <ButtonClickEvent></ButtonClickEvent> */}
//       {/* <Contacts></Contacts> */}
//       <Form></Form>
//     </div>
//   );
// }

export default App;
