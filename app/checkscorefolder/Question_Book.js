import "./Question_book.css";
const Question_Book = () => {
    return (
        <div>
            <div className="question-body">
                <p>Which of the following committees recommended inclusion of fundamental duties?</p>
                <form>
                    <input type="radio" name="fav_language" className="line1" />
                    <label htmlFor="html">Tarapore Committee </label><br />

                    <input type="radio" name="fav_language" className="line1" />
                    <label htmlFor="css">Radha Krishnan Committee </label><br />

                    <input type="radio" name="fav_language" className="line1"/>
                    <label htmlFor="javascript">Swaran Singh Committee </label><br />

                    <input type="radio" name="fav_language" className="line1"/>
                    <label htmlFor="javascript">Balwantrai Mehta Committee </label>
                </form>
            </div>
        </div>
    );
};
export default Question_Book;
