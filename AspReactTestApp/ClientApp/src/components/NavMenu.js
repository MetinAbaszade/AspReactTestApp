import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/counter">Counter</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/profile">Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/posts">Posts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/auth/login">Login</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
