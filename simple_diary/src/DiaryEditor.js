import { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
    
    // MutableRefObject는 DOM 요소에 접근하는 기능 제공
    const authorInput = useRef();
    const contentTextarea = useRef();    

    // 여러 state의 자료형, 속성 등이 비슷하다면 여러 state를 객체로 묶어 관리할 수 있다.
    const baseState = {
        author: "",
        content: "",
        emotion: 1,
    }
    
    const [state, setState] = useState(baseState);

    // setState 함수도 중복되는 부분을 다음과 같이 합쳐주자
    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = () => {
        if(state.author.length < 1){
            /* 
            [조건 불충족시 해당 DOM 요소에 focus 주기]

            authorInput.current => 현재 input 태그 요소
            focus() => 포커스 효과
            */
            authorInput.current.focus();
            return;
        }            
        if(state.content.length < 5){
            contentTextarea.current.focus();
            return;
        }            
        onCreate(state.author, state.content, state.emotion);
        alert("저장되었습니다");
        setState(baseState);
    }

    return (
        <div className="DiaryEditor">
            <h2> 오늘의 일기 </h2>
            <div>
                <input
                    name="author"
                    ref={authorInput}
                    value={state.author}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <textarea
                    name="content"                    
                    ref={contentTextarea}
                    value={state.content}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                오늘의 감정 점수:
                <select
                    name="emotion"
                    value={state.emotion}
                    onChange={handleChangeState}
                >
                    <option value={1}> 1 </option>
                    <option value={2}> 2 </option>
                    <option value={3}> 3 </option>
                    <option value={4}> 4 </option>
                    <option value={5}> 5 </option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}> 일기 저장하기 </button>
            </div>
        </div>
    )
}

export default DiaryEditor;