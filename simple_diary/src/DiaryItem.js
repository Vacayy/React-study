import { useRef, useState } from "react";

const DiaryItem = ({ onDelete, onEdit, 
    id, author, content, emotion, created_date }) => {

    const [editMode, setEditMode] = useState(false);
    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const [localContent, setLocalContent] = useState(content);

    const handleDelete = () => {
        if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onDelete(id);
    }}

    const handleCancelEdit = () => {
        setEditMode(false);
        setLocalContent(content);
    }
    
    const localContentInput = useRef(); 
    const handleEdit = () => {
        if (localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }

        onEdit(id, localContent);
        setEditMode(false);
    }


    return (
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작성자: {author} | 감정점수: {emotion}
                </span>
                <br />
                <span className="date">
                    작성일: {new Date(created_date).toLocaleString()}
                </span>
            </div>
            <div className="content">
                {editMode ?
                    <textarea
                        ref={localContentInput} 
                        value={localContent}
                        onChange={(e) => {
                            setLocalContent(e.target.value);
                        }}
                    />
                    :
                    <>{content}</>
                }
            </div>
            {editMode ? (
                <>
                    <button onClick={handleCancelEdit}>
                        수정 취소
                    </button>
                    <button onClick={handleEdit}>
                        수정 완료
                    </button>
                </>
                ) : (
                <>
                    <button onClick={handleDelete}>
                        삭제하기
                    </button>

                    <button onClick={toggleEditMode}>
                        수정하기
                    </button>
                </>
            )}
        </div>
    )
}

export default DiaryItem;