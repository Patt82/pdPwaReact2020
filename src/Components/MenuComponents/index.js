import React, { Component } from "react"
import OptionComponents from "./OptionComponents"
import {Navbar, Nav} from 'react-bootstrap'
import NetContext from '../../Context/NetContext'



class MenuComponents extends Component {
    render() {
        return (
            <NetContext.Consumer>
                {
                    context=>(
                        <Navbar bg="light" expand="lg" style={{marginBottom:'10px'}}>
                            <Navbar.Brand href="/">MyShop</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    {
                                        context.login &&
                                        <>
                                            <OptionComponents key="home" option={{label:"Home",path:"/"}} />
                                            <Nav.Link onClick={context.logoutUser}>Exit</Nav.Link> 
                                            {/* //no usar el href */}
                                        </>
                                    }
                                    {
                                        !context.login &&
                                        <>
                                        <OptionComponents key="home" option={{label:"Register",path:"/register"}} />
                                        <OptionComponents key="home" option={{label:"Login",path:"/login"}} />
                                        </>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    )
                }
            </NetContext.Consumer>
        )
    }
}

export default MenuComponents;