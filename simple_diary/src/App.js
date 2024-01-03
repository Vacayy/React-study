import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "김주영",
    content: "안녕하십니까!",
    emotion: 5,
    created_date: new Date().getTime() // 시간 객체 생성 (인자 없으면 현재 시간 기준)
  },
  {
    id: 2,
    author: "홍길동",
    content: "ㅎㅎㅎㅎㅎㅎㅎㅎ",
    emotion: 3,
    created_date: new Date().getTime() 
  },
  {
    id: 3,
    author: "가나다",
    content: "ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
    emotion: 1,
    created_date: new Date().getTime() 
  },
]

function App() {
  return (
    <div className="App">       
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
