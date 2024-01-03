const OddEven = ({ count }) => {
    const number = count;

    return (
        <div> {number%2 === 0? "짝수": "홀수"} 입니다. </div>
    )
}

export default OddEven;


