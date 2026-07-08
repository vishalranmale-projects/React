function Even(){
    console.log("Button Was Clicked!")
    return
}

function DoubleClick(){
    console.log("You Double Clicked Me!")
}

function Button(){
    return(<button onDoubleClick={DoubleClick}>Double Click!</button>)
}

export default Button;