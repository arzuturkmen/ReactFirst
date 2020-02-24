import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserConsumer from "../context";
import {Link} from "react-router-dom";


class User extends Component {


    //STATE oluşturma ilk yöntem : constructor
 /*   constructor(props) {
        super(props);
        this.state ={
            isVisible: false
        }
    }
*/
    //STATE oluşturma 2. yöntem
    state = {
        isVisible : false
    }



    //Bind Etme ve Click Event olayı
    onClickEvent(number,e){ //önce kendi gönderdiğmiz değerler gelir

        console.log(this);
        console.log("** onClickEvent **");

        //console.log(number);

       this.setState({
           isVisible : !this.state.isVisible
       })
    }

    onDeleteUser = (dispatch,e) =>{
        const {id} = this.props;
        dispatch({type : "DELETE_USER",payload:id});
    }
    componentWillUnmount() {
        console.log("Component will Unmount");
    }

    render() {

        const {id,name,department,salary} = this.props;
        const {isVisible} = this.state;

        return (<UserConsumer>{
            value => {
                const {dispatch} = value   //value içindeki dispatchi aldık
                return (
                    <div className="col-md-8 mb-4">
                        <div className="card" style={isVisible ? {backgroundColor : "#62848D", color:"white"} : null}>
                            <div className="card-header  d-flex  justify-content-between">
                                <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 34)}>{name}</h4>
                                <i onClick={this.onDeleteUser.bind(this,dispatch)} className="fa fa-trash-o" style={{cursor: "pointer"}}></i>

                            </div>

                            {isVisible ? <div className="card-body">
                                <p className="card-text"> Maaş : {salary}</p>
                                <p className="card-text">Department : {department}</p>
                                <Link to={'/edit/'+id } className="btn btn-dark btn-block">Update User</Link>
                                <p>{this.state.test}</p>
                            </div> : null}


                        </div>

                    </div>
                );
            }
        }

        </UserConsumer>)

    }
}


User.defaultProps = {
    name:  "Bilgi Yok",
    salary : "Bilgi Yok",
    department : "Bilgi Yok"

}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}

export default User;