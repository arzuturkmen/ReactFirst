import React, {Component} from 'react';
import posed from "react-pose";
import UserConsumer from "../context";

var uniqid = require('uniqid');

const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    }
});

class AddUser extends Component {

    state = {
        visible: false,
        name: "",
        department: "",
        salary: "",
        error: ""
    }

    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }

    validateForm = () => {
        const {name, salary, department} = this.state;

        if (name === "" || salary === "" || department === "") {
            return false;
        } else
            return true;


    }

    changeInput = (e) => {


        this.setState({
            [e.target.name]: e.target.value
        })

    }

    addUser = (dispatch, e) => {
        e.preventDefault(); // Formun otomatik render edilmesini önlüyor.
        const {visible, name, salary, department} = this.state;
        const newUser = {
            id: uniqid(),
            name,
            salary,
            department
        }

        if(!this.validateForm()){
            this.setState({
                error:true
            })

            return;
        }
        dispatch({type: "ADD_USER", payload: newUser})

        console.log(newUser);

        //redirect
        this.props.history.push("/");
    }

    render() {
        const {visible, name, salary, department,error} = this.state;

        return <UserConsumer>{
            value => {
                const {dispatch} = value;
                return (

                    <div className="col-md-8 mb-4">
                        <button onClick={this.changeVisibility}
                                className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>

                        <Animation pose={visible ? "visible" : "hidden"}>

                            <div className="card">
                                <div className="card-header">
                                    <h4>Add User Form</h4>
                                </div>
                                <form onSubmit={this.addUser.bind(this, dispatch)}>
                                    <div className="card-body">
                                        {
                                            error ?
                                                <div className="alert alert-danger">
                                                Lütfen Bilgileriniiz Kontrol Ediniz!</div>:null
                                        }
                                        <label htmlFor="name">Name</label>
                                        <input type="text" onChange={this.changeInput} name="name" id="id"
                                               placeholder="Enter name" className="form-control"
                                               value={name}/>
                                    </div>
                                    <div className="card-body">
                                        <label htmlFor="department">Department</label>
                                        <input type="text" onChange={this.changeInput} name="department" id="department"
                                               placeholder="Enter department" className="form-control"
                                               value={department}/>
                                    </div>
                                    <div className="card-body">
                                        <label htmlFor="salary">Salary</label>
                                        <input type="text" onChange={this.changeInput} name="salary" id="salary"
                                               placeholder="Enter salary" className="form-control"
                                               value={salary}/>
                                    </div>

                                    <button className="btn btn-danger btn-block" type="submit">Add User</button>
                                </form>
                            </div>
                        </Animation>


                    </div>

                );

            }
        }

        </UserConsumer>

    }
}

export default AddUser;