import React, {Component} from "react";

class Square extends Component {
    constructor(props) {
        super(props)
        this.value = props.value
    }
    render() {
        return (
            <div className="square" onClick={() => this.props.onClick}>{this.value}</div>
        )
    }
}

export default Square