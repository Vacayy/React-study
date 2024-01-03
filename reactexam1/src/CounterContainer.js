const CounterContainer = ( props ) => {
    console.log(props)
    return (
        <div style = {{margin: 20, padding: 20, border: "1px solid purple"}}>
            {props.children}            
        </div>
    );
};

export default CounterContainer;