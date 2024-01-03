
const MyFooter = () => {
    const footerItems = [];

    for (let i = 0; i < 10; i++) {
        footerItems.push(<div key={i}>푸터 {i}</div>);
    }

    return (
        <>
            <footer>
                {footerItems}
            </footer>

            <div> 
                하이
            </div>
        </>
    );
}

export default MyFooter;