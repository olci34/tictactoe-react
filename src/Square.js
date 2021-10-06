import React, {Component} from "react";

class Square extends Component {
    constructor(props) {
        super(props)
        this.value = props.value
    }
    render() {
        console.log('square rendered')
        return (
            <div className="square" onClick={() => this.props.onClick(this.value)}>{this.value}</div>
        )
    }
}

export default Square