import React, {Component} from 'react';

class Test extends Component {

    constructor(props) {
        super(props);
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.setState({
            a:20
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Componenet Did Update");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        console.log("Should Component Update");
        return false ;
    }

    render() {

        console.log("render")
        return (
            <div>

            </div>
        );
    }
}

export default Test;