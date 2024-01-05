/* 
[link 컴포넌트]
SPA, CSR 방식으로 페이지를 이동시켜주는 컴포넌트
*/
import {Link} from 'react-router-dom';

const RouteTest = () => {
    return (
        <>
            <Link to={'/'}>Home</Link>
            <br/>
            <Link to={'/New'}>New</Link>
            <br/>
            <Link to={'/Diary'}>Diary</Link>
            <br/>
            <Link to={'/Edit'}>Edit</Link>
            <br/>
        </>
    )
}


export default RouteTest;