import React, {Component} from 'react';
import NavContainer from './navContainer';
import {NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn, signOut} from '../../actions';

 class Nav extends Component {

        renderAuthButton(){
                const {auth, signIn, signOut} = this.props;
                if(auth){
                        return <button className='btn btn-outline-danger' onClick={signOut}>Sign Out</button>
                } else {
                        return <button className='btn btn-outline-primary' onClick={signIn}>Sign In</button>
                }
        }

        render(){
                return(
                        <NavContainer>
                        <li className="nav-item">
                                <NavLink exact className='nav-link' to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink className='nav-link' to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink className='nav-link' to='/secret-list'>Secret List</NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink className='nav-link' to='/movie-quotes'>Movie Quote</NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink className='nav-link' to='/sign-up'>Sign Up</NavLink>
                        </li>
                        {/* <li className="nav-item">
                                {this.renderAuthButton()}
                        </li> */}
                        
                        </NavContainer>
                );
        }
}
function mapStateToProps(state){
        return {
                auth: state.user.auth
        }
}
export default withRouter(connect(mapStateToProps, {signIn, signOut})(Nav));