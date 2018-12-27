import React from 'react';
import {browserhistory} from 'react-router';

export default class Logout extends Component {

    componentWillMount(){
        localStorage.removeItem('auth-token');
        browserhistory.push('/');
    }
    render(){
        return null;
    }
}