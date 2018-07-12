import React, {Component} from 'react';
import {connect} from 'react-redux';


export default (WrappedComponent) =>{
    class Auth extends Component {
        
        redirectRoute(){
            if(!this.props.auth){
                this.props.history.push('/');
            } 
        }
        componentDidMount(){
            this.redirectRoute();
        }
        componentDidUpdate(){
            this.redirectRoute();
        }
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
    function mapStateToProps(state){
        return {
                auth: state.user.auth
        }
    }

return connect(mapStateToProps)(Auth);
}
