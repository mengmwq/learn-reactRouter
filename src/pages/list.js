import React, { Component } from 'react';

class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:''
        }
    }
    render() {
        return (
            <div>
                这是list-{this.state.id}
                
            </div>
        );
    }
    componentDidMount(){
        console.log(this.props.match)
        let typeId = this.props.match.params.id;
        this.setState({
            id:typeId
        })

    }
}

export default list;