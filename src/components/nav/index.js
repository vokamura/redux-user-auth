import React, { Component } from 'react';
import NavContainer from './nav_container';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class Nav extends Component {

    renderAuthButton(){
        const { auth, signIn, signOut } = this.props;
        if(auth){
            return <button onClick={signOut} className="btn btn-outline-danger">Sign Out</button>
        }
        return <button onClick={signIn} className="btn btn-outline-primary">Sign In</button>
    }

    render(){
        return(
            <NavContainer>
                <li className="nav-item ">
                    <NavLink exact className="nav-link" to="/">Home</NavLink>
                </li> 
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/not-secret-list">Not Secret List</NavLink>
                </li> 
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/secret-list">Secret List</NavLink>
                </li> 
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/movie-quote">Movie Quote</NavLink>
                </li>  
                <li className="nav-item">
                    {this.renderAuthButton()}
                </li>
            </NavContainer>
        );
    }
}

function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}

export default withRouter(connect(mapStateToProps, { signIn: signIn, signOut: signOut})(Nav));