function Conditional(props){
    const positive = () => {return <p>Positive value!</p>;};
    const negative = function(){return <p>Negative value!</p>;};

    return props.testValue ? positive() : negative();
}

export default Conditional;