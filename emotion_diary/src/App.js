import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import RouteTest from './components/RouteTest';

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

/* 
[BrowserRouter 컴포넌트]
해당 컴포넌트로 감싸져 있는 파트는 브라우저의 url과 맵핑될 수 있다 

[Routes 컴포넌트]
Routes 내부 공간은 라우팅에 의해 렌더링되는 페이지가 바뀐다.

[Route 컴포넌트]
Route 컴포넌트는 실질적으로 url 경로와 컴포넌트를 맵핑시키는 역할
*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2> 페이지 라우팅 테스트 </h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
      <RouteTest />
    </BrowserRouter>
  );
}

export default App;
