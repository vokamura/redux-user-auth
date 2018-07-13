import React, { Component } from 'react';
import { connect } from 'react-redux';

export default(WrappedComponent) => {
    class Auth extends Component {

        //if user isn't authorized, make them go home
        componentDidMount(){
            if(!this.props.auth){
                this.props.history.push('/');
            }
        }

        //if props or state changes, this will get called
        //don't change setState in here.  End up in infinite loop since this also gets called when state changes.
        //make if statement to update if needed
        componentDidUpdate(prevProps, prevState){
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render(){
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