import "./Question_Bank.css";

const Question_Bank = () => {
    return (
        <div>
            <div className="question-book">
                <div className="question-title">QUESTION 1</div>
                <div className="score">Score +1</div>
            </div>
            <div className="question-body">
                <p>Which of the following committees recommended inclusion of fundamental duties?</p>
                <form>
                    <input type="radio" name="fav_language" />
                    <label htmlFor="html">Tarapore Committee </label><br />

                    <input type="radio" name="fav_language" />
                    <label htmlFor="css">Radha Krishnan Committee </label><br />

                    <input type="radio" name="fav_language" />
                    <label htmlFor="javascript">Swaran Singh Committee </label><br />

                    <input type="radio" name="fav_language" />
                    <label htmlFor="javascript">Balwantrai Mehta Committee </label>
                </form>
            </div>
        </div>
    );
};

export default Question_Bank;
