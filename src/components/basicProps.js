import React, {Component} from 'react';

class BasicProps extends Component {


    render() {
        return (
            <div>
                <ul>
                    <li>İsim : {this.props.name} </li>
                    <li>Department : {this.props.department} </li>
                    <li>Maaş : {this.props.salary}</li>
                </ul>

            </div>
        );
    }
}

export default BasicProps;