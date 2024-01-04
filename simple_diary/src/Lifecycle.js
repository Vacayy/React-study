import React, {useEffect, useState} from 'react';

// 언마운트 시 대응하는 용도로 useEffect 사용하기 - return 값으로 함수 반환하기
const UnmountTest = () => {
    useEffect(()=>{
        console.log("언마운트 테스트 Mount!")
        
        return (() => {
            // useEffect의 리턴 함수는 Unmount 될 때 호출됨
            console.log("언마운트 테스트 Unmount!")
        })
    },[])

    return (
        <div> Unmount Testing Component </div>
    )
}

const Lifecycle = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // 마운트 시 대응하는 용도로 useEffect 사용하기 - deps로 빈 배열 전달
    useEffect(()=> {
        console.log("Mount!");
    },[])

    // 컴포넌트 업데이트 시 대응하는 용도로 useEffect 사용하기 - deps 전달 X
    useEffect(()=>{
        console.log("Update!");
    })

    // 특정 state 변화에만 대응하는 용도로 useEffect 사용하기 - deps에 해당 state 전달
    useEffect(()=>{
        console.log(`Count updated: ${count}`);
        if (count > 5){
            alert("카운트가 5를 넘었습니다. 초기화를 수행합니다");
            setCount(0);
        }
    },[count])

    // 토글 구현하기 for Unmount test
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);
    /* 
    아래 return 에서 단락회로 평가 - {isVisible && <UnmountTest />} -를 통해 토글 기능 구현 가능
    isVisible이 true이면, 뒤에 값을 반환받아 읽어야 함.
    근데 읽는 순간 화면에 렌더링 됨. (true 이기도 하고)
    */
    
    return (
    <div style={{ padding: 20 }}>
        <div>
            <button onClick={toggle}> on/off </button>
            {isVisible && <UnmountTest />} 
        </div>
        <div>
            {count}
            <button onClick={()=> setCount(count+1)}> + </button>
        </div>
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    </div>)
}

export default Lifecycle;


