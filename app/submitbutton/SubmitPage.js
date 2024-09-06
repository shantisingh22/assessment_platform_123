const submitPage = () => {
    return (
        <>
            <div className="submitPage">
                <div className="submitPage1">
                    <div className="image-box">
                        <img src="Check.png" alt="image" />
                    </div>
                    <div className="content-box">
                        <div className="content1">Successfully Sumbitted</div>
                        <div className="content2">Thank you for completing the test! </div>
                        <div className="content3">Review your results and keep practicing.
                            Great job and keep up the hard work!</div>
                    </div>

                    <div className="ScoresDiv">
                        <a className="ScoreAtag" href="/checkscorefolder">Check Your Score</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default submitPage;

