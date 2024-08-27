import "./Question_Bank.css";
const Question_Bank = () => {
    return (
        <div>
            <div className="question-book">
                <div className="question-title">QUESTION 1</div>
                <div className="score">Score +1</div>
            </div>
            <div className="question-body">
                <p><strong>Which of the following committees recommended inclusion of fundamental duties?</strong></p>
                <div className="options">
                    <label><input type="radio" name="q1"/> Tarapore Committee</label>
                    <label><input type="radio" name="q1"/> Radha Krishnan Committee</label>
                    <label><input type="radio" name="q1"/> Swaran Singh Committee</label>
                    <label><input type="radio" name="q1"/> Balwantrai Mehta Committee</label>
                </div>
            </div>
        </div>
    );
};
export default Question_Bank;
