import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList, onDelete, onEdit }) => {    
    return (
        <div className="DiaryList">
            <h2> 일기 리스트 </h2>
            {diaryList.length}개의 일기가 있습니다.
            <div>
                {diaryList.map((e) => (                    
                    <DiaryItem 
                    onDelete={onDelete}  
                    onEdit={onEdit}  
                    key={e.id} 
                    {...e}/>
                ))}
            </div>
        </div>
    )
}

// Props를 제대로 전달받지 못했을 때의 기본값
DiaryList.defaultProps = {
    diaryList: []
}


export default DiaryList;
