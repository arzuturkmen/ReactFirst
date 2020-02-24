import React, {Component} from 'react';
import axios from "axios";

const UserContext = React.createContext();
//Provider , Consumer
const reducer =  (state,action) =>{
    switch (action.type) {
        case "DELETE_USER" :
            return {
                ...state,
                users: state.users.filter(user =>action.payload !== user.id)
            }
        case "ADD_USER" :
            return {
                ...state,
                users : [...state.users,action.payload]
            }
        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map(user =>user.id === action.payload.id ? action.payload:user)
            }

        default :
         return state

    }
}


export class UserProvider extends Component {

      state = {
        users : [
          /*  {
            id:"1",
            name: "Mustafa Mert Gürsel",
            salary : "4000",
            department : "Bilişim"
        },
            {
                id:"2",
                name:"Hatice Karan",
                salary: "6000",
                department: "Pazarlama"
            },
            {
                id:"3",
                name:"Deniz Karaca",
                salary:"1500",
                department:"stajyer"
            }*/
            ],
          dispatch : action => {
            this.setState(state => reducer(state,action))
          }


    }

    //Component yüklemeden hemen önce çalışır
    //get,set,put requestleri yapmak için axios kütüphanesi dahil edildi.
    componentDidMount = async () => {
     const response =  await axios.get("http://localhost:3001/users");
     console.log(response.data);
     this.setState({
         users : response.data
     })
    }


    render() {
        return (
                <UserContext.Provider value={this.state}>
                    {this.props.children}
                </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;

