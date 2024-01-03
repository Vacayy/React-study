const DiaryItem = (elem) => {

    return (
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작성자: {elem.author} | 감정점수: {elem.emotion}
                </span>
                <br />
                <span className="date">
                    작성일: {new Date(elem.created_date).toLocaleString()}
                </span>
            </div>
            <div className="content">
                {elem.content}
            </div>
        </div>
    )
}

export default DiaryItem;