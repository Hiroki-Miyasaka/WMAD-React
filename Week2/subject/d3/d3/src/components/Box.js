const Box = (props) => {

    const style = {
        backgroundColor: props.on && "#222222"
    }
    // console.log(`${props.id} = updated box`);

    return (
        <div onClick={props.onClick} style={style} className="box"></div>
    )
}

export default Box;