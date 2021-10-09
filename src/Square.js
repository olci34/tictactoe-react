const Square = (props) => {
    return (
        <div className="square" onClick={() => props.onClick(props.value)}>{props.value}</div>
    )
}

export default Square