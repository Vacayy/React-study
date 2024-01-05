import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    const mode = searchParams.get("mode");
    console.log("id: ", id);
    console.log("mode: ", mode);

    return (
        <div>
            <h1> Edit </h1>
            <p> 이곳은 Edit 입니다. </p>
            <button onClick={()=> setSearchParams({user: "unknown"})}> 
                Query String 바꾸기 
            </button>
            
            <button onClick={()=>{navigate("/", {replace:true});}}> 
                Home으로 가기 
            </button>
            <button onClick={()=>{navigate(-2)}}> 
                두 페이지 전으로 가기 
            </button>
        </div>
)
}


export default Edit;
