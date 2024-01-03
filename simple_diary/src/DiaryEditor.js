import { useState } from "react";

const DiaryEditor = () => {
    // 여러 state의 자료형, 속성 등이 비슷하다면 여러 state를 객체로 묶어 관리할 수 있다.
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });
    // const [author, setAuthor] = useState("");
    // const [content, setContent] = useState("");

    // setState 함수도 중복되는 부분을 다음과 같이 합쳐주자
    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = () => {
        if(state.author.length < 1){            
            alert("작성자를 입력해주세요");
            return;
        }            
        if(state.content.length < 5){
            alert("내용은 최소 5글자 이상 작성해주세요")
            return;
        }            
        alert("저장되었습니다");
    }

    return (
        <div className="DiaryEditor">
            <h2> 오늘의 일기 </h2>
            <div>
                <input
                    name="author"
                    value={state.author}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <textarea
                    name="content"
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