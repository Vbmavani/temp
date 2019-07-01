import React from 'react'

import Header from '../Components/Header'

import Button from '@material-ui/core/Button';


class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <Header />
            </div>
        )
    
    }
}
export default Dashboard;
