import Filter_box from "./Filter-box";
import Question_Bank from "./Question_Bank";
const Assessment = () => {
    return (
        <div className="questions">
            
            <div className="filter-box">
                <Filter_box />
            </div>
            <div className="question-box">
                <Question_Bank />
                <Question_Bank />
                <Question_Bank />
                <Question_Bank />
                <Question_Bank />
            </div>
        </div>
    );
};
export default Assessment;



// import Question_Bank from "./Question_Bank";
// const Assessment = () => {
//     return (
//         <div className="maincontainer">
//             <div className="questions">
//                 <div className="filter-box">
//                     <div className="heading-box">Filters</div>
//                     <div className="filters">
//                         <div className="filter-group">
//                             <div className="filter-label">Question Score</div>
//                             <div className="filter-buttons">
//                                 <button className="filter-btn">All</button>
//                                 <button className="filter-btn">10</button>
//                                 <button className="filter-btn">15</button>
//                                 <button className="filter-btn">20</button>
//                             </div>
//                         </div>
//                         <div className="filter-group">
//                             <div className="filter-label1">Questions Attempted</div>
//                             <div className="filter-buttons">
//                                 <button className="filter-btn">All (40)</button>
//                                 <button className="filter-btn">Attempted (3)</button>
//                                 <button className="filter-btn">Unattempted (37)</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="question">
//                     <Question_Bank />
//                     <Question_Bank />
//                     <Question_Bank />
//                     <Question_Bank />
//                     <Question_Bank />
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Assessment;



