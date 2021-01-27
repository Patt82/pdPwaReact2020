import React, { Component } from "react";
import './App.css';
import MenuComponents from "./Components/MenuComponents/index"
import { BrowserRouter } from "react-router-dom";
import RoutesAdminComponents from "./Components/RoutesComponents/RoutesAdminComponents";
import RoutesWebComponents from "./Components/RoutesComponents/RoutesWebComponents";
import GlobalState from './Context/GlobalState'

class App extends Component { //JSX

  constructor() {
    super()
    //DEFINIMOS EL STATE
    this.state = {
      options: [
        {
          path: "/login",
          label: "Login"
        },
        {
          path: "/register",
          label: "Register"
        }
      ],
      user: {
        name: "Pat",
        rol: "web"
      }
    }
  }

  //al handle se le puede poner cualquier nombre
  handleClickTitle = () => {
    this.setState({
      title: "Chau Mundo"
    })
  }
  handleClickLogin = () => {
    this.setState({
      options: [
        {
          path: "/",
          label: "Home"
        },
        {
          path: "/login",
          label: "Login"
        }
      ],
    })
  }

  render() {

    return (
      <>
        <GlobalState>
        <BrowserRouter>
          <MenuComponents options={this.state.options} click={this.handleClickLogin} />
          { 
            this.state.user.rol === "web" && <RoutesWebComponents />
          }

          {
            this.state.user.rol === "admin" && <RoutesAdminComponents />
          }
        </BrowserRouter>
        </GlobalState>
      </>
    );
  }
}
export default App;
