import React, {Component} from 'react';
import User from "./User";
import UserConsumer from "../context";

class Users extends Component {



    render() {
        return (
            <UserConsumer>
                {
                    value => {
                        const {users} = value;
                        return (
                            <div>

                                {
                                    users.map(deniz => {
                                        return ( <User key={deniz.id} id={deniz.id} name={deniz.name} salary={deniz.salary} department={deniz.department}></User>)
                                    })
                                  }

                            </div>
                        );
                    }
                }
            </UserConsumer>
        )

    }
}

export default Users;
