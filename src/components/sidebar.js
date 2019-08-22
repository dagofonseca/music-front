import React from 'react';
import "./styles/sidebar.css";
import imgAvatar from "../images/avatar-artist.jpg";
import logo from "../images/logo.png";
import {
    Nav, 
    NavItem, 
    NavLink , 
    NavbarBrand, 
    Container,
    Row, 
    Col,  
    Collapse,
    Navbar,
    NavbarToggler,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';         

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            firstCollapse: false,
            secondCollapse: false
        }
        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this);
    }
    toggle( ) {        
        this.setState({firstCollapse: !this.state.firstCollapse})        
    }
    toggle2( ) {        
        this.setState({secondCollapse: !this.state.secondCollapse})        
    }

    render() {
        const {firstCollapse, secondCollapse} = this.state;
        return (
            <Container fluid className="conten-sidebar">
                <Row>
                    <Col>
                        <div className="logo">
                            <img src={logo} alt="logo" className="imglogo" />
                            <h3>MUXSIS</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <img src={imgAvatar} alt="Avatar del artista" className="w-100 imgAvatar" />
                    </Col>
                    <Col>
                        <div className="avatarText">
                            <h5>Mariah Caray</h5>
                            <p>Passionate Musician</p>
                        </div>                        
                    </Col>
                </Row>
                <Row>
                    <Col  className="side p-0">
                        <Nav vertical>                          
                            
                            <UncontrolledDropdown nav inNavbar className="mr-auto" onClick={this.toggle} >
                                <DropdownToggle nav caret className='padleft'>Explorer music</DropdownToggle>
                                <Collapse isOpen={firstCollapse}>
                                    <NavItem>
                                    <NavLink className="textNavbar" href="#">Your Albums</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="textNavbar" href="#">Create Album</NavLink> 
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="textNavbar" href="#">Add Artist</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="textNavbar" href="#">Appearance</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="textNavbar" href="#">Graphic statistics</NavLink>
                                    </NavItem>
                                </Collapse>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar className="mr-auto" onClick={this.toggle2}>
                                <DropdownToggle nav caret className='padleft'>
                                    Your Music
                                </DropdownToggle>
                                <Collapse isOpen={secondCollapse}>
                                    <NavItem>
                                        <NavLink className="textNavbar" href="#">Favority</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="textNavbar" href="#">History</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="textNavbar" href="#">Playlist</NavLink>
                                    </NavItem>
                                </Collapse>
                            </UncontrolledDropdown>
                        </Nav>
                    </Col>
                </Row>
            </Container>      
        );
    } 
}

export default Sidebar;