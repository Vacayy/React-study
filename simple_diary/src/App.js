import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import {useRef, useState} from "react";

function App() {
  // 전역적으로 관리하는 state
  const [data, setData] = useState([]); // 빈 배열로 초기값 세팅

  /*
  useRef를 사용하여 dataId를 관리하는 이유는 컴포넌트의 렌더링과 독립적으로 값을 유지하고 변경할 수 있기 때문.
  dataId는 일기 데이터의 고유 식별자로 사용되며, 이 값이 변해도 컴포넌트의 리렌더링을 유발하지 않아야 한다.
  */
  const dataId = useRef(0);

  // 일기 배열에 새로운 데이터 추가하는 함수
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author, 
      content,
      emotion,
      created_date, 
      id: dataId.current
    }
    dataId.current += 1;

    setData([newItem, ...data]);
  }

  const onDelete = (targetId) => {    
    const newDiaryList = data.filter((elem) => elem.id !== targetId);
        
    setData(newDiaryList);
  }

  return (
    <div className="App">       
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
