import react, { useState } from "react";
import OddEven from "./OddEven";

const Counter = (props) => {       
    const [count, setCount] = useState(props.initialNumber);    
    const onIncrease = () => {
        setCount(count + 1);
    };
    
    const onDecrease = () => {
        setCount(count - 1);
    };
    
    return (        
        <div>            
            <div> {count} </div>
            <OddEven count={count} />
            <button onClick={onIncrease}> + </button>
            <button onClick={onDecrease}> - </button>                           
        </div>
    )
}

// Props를 제대로 전달받지 못했을 때의 기본값
Counter.defaultProps = {
    initialNumber: 50
}

export default Counter;