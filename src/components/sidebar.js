import React from 'react';
import "./styles/sidebar.css";
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
            <Container fluid>
                <Row>
                    <Col xs="5" md="3" className="side p-0">
                        <Nav vertical>
                            <NavbarBrand href="/" className="mc-auto">MUXSIS</NavbarBrand>
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