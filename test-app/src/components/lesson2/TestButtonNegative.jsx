var clickHandler = (e)=>{alert("I told you not to do that!");};

function TestButtonNegative(){
    return <button onClick={clickHandler}>Don't click me!</button>
}

export default TestButtonNegative;