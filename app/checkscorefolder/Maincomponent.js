import QuestionList from './QuestionList';
const Maincomponent = () => {
  return (
    <>
    <div className="main-content">
      <div className="score-box">
        <div className="box-fix">
          <div className="row1">
            <div className="col">35/40</div>
            <div className="col1">Your Score</div>
          </div>
          <div className="row2">
            <div className="row_one">
              <img src="image (1).png" className="image"/>
              <div className="row_twobox">
                <div className="row_onecol">Unattempted:</div>
                <div className="row_onecol1">3</div>
              </div>
            </div>
            <div className='row4'></div>
            <div className="row_one2">
              <img src="Check.png" className="image1" alt="Correct" />
              <div className="row_twobox1">
                <div className="row_onecolone1">Correct:</div>
                <div className="row_onecol123">3</div>
              </div>
            </div>
            <div className='row4'></div>
            <div className="row_one3">
              <img src="Check (1).png" className="image2" alt="Wrong" />
              <div className="row_twobox2">
                <div className="row_onecolone2">Wrong:</div>
                <div className="row_onecol1234">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">CHECK YOUR ANSWERS</div>
      <hr className="hrline"></hr>
      <QuestionList/>
    </div>
    </>
  );
};
export default Maincomponent;




