import FilterBtnComponent from "./Filter_btn_component.js";
import CircularTimer from "./CircularTimer";
import Filter_box from "./Filter-box";
// import ButtonPage from "./SubmitButtonComponent";
import Question_Bank from "./Question_Bank";
const Assessment = () => {
    return (
        <div className="questions">
            <div className="questions11">
                <div className="watch-box">
                    <CircularTimer />
                    <div className="Filter_Button">
                        <FilterBtnComponent />
                    </div>
                    <div className="filter-box">
                        <Filter_box />
                    </div>
                </div>

                    <div className="question-box">
                        <Question_Bank />
                        <Question_Bank />
                        <Question_Bank />
                        <Question_Bank />
                        <Question_Bank />
                    </div>
                    {/* <div className="ButtonPageDiv">
                        <ButtonPage/>
                    </div> */}

            </div>
        </div>
    );
};
export default Assessment;
