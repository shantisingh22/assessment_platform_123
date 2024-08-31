import "./style.css";
import Header from "./Header";
import Assessment from "./Assessment_question";

const main_page = () => {
    return (
        <div className="container-box">
            <Header/>
            <Assessment/>
            {/* <home/> */}
        </div>
    );
};
export default main_page;
