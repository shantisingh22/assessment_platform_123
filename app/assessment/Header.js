// import React from 'react';
import CircularTimer from "./CircularTimer";
import Pagination from "./Pagination.js";
import './style.css';
const Header = () => {
    return (
        <div className="header_one">
            <div className="header_onee">
                <img src="Logo Gr.png" className="header_logo" alt="Logo" />
                <CircularTimer/>
                <Pagination />
                <a href="/submitbutton">
                    <div className="SubmitButton">
                        <button className="submitbutton">Submit</button>
                    </div>
                </a>
            </div>
        </div>
    );
};
export default Header;





/*
* {
    margin: 0;
    padding: 0;
}
.container{
    border:solid 1px red;
    width:1200px;
    padding: 0px;
}
.header_one{
    border:solid 1px red;
    width:1200px;
    height:72px;
    display: flex;
    align-items: center;
    background-color: #FCFAFA;
    justify-content: space-between;
}
.header_logo{
    border: solid 1px red;
    width: 112px;
    margin-left: 50px;
}
.main-headerbox{
    border:solid 1px blue;
    width: 700px;
    display: flex;
    background-color: #FCFAFA;
    justify-content: space-between;
}
.pagination {
    border: 1px solid orangered;
    width: 463px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px; 
}
.pagination__button {
    background-color: #eee;
    border: 2px solid gold; 
    border-radius: 50%;
    padding: 8px 12px; 
    cursor: pointer;
    font-size: 16px;
    color: black;
    font-weight: bold;
}
.page-btn {
    background-color: #eee;
    border: 1px solid gold; 
    border-radius: 50%;
    padding: 8px 12px; 
    cursor: pointer;
    font-size: 16px;
    color: black;
    margin-left: 5px;
    font-weight: bold;
}
.page-btn:hover {
    background-color: gold; 
}
.SubmitButton{
    border:solid red 1px;
    width:130px;
    height:54px;
    margin-top: 5px;
    margin-right: 60px;
}
.button{
    border:solid 1px blue;
    width:60px;
    height:22px;
    margin-top: 16px;
    margin-left: 35px;
}
.maincontainer{
    border:solid blue 1px;
    width:1200px;
    border: solid 1px red;
    margin:auto;
    background-color: #EBE9E6;
    display: flex;
    justify-content:center;
}
.questions {
    width:895px;
    border: solid 1px red;
    justify-content: space-between;
    background-color: #EBE9E6;
    display: flex;
}*/

/* FILTER BOX*/
/* 
.filter-box {
    width:284px;
    padding: 20px;
    height:375px;
    background-color: #F9F7F2;
    margin-top:153px;
    border: solid 1px red;
}
.heading-box {
    font-size: 24px;
    margin-bottom: 10px;
    margin-bottom: 36px;
    font-weight: bold;
    border: solid1px red;
    font-family: Inter;
}
.filters {
    margin-bottom: 20px;
    margin-bottom: 16px;
    background-color: #F9F7F2;
    border: solid1px red;
}
.filter-group {
    margin-bottom: 20px;
    border: solid1px red;
}
.filter-label {
    font-size: 14px;
    margin-bottom: 16px;
    color: #666;
    font-weight: bold;
    border: solid 1px red;
}
.filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    border: solid1px red;
}
.filter-btn {
    padding: 5px 10px;
    background-color: #eee;
    border: 1px solid #ccc;
    cursor: pointer;
    border: solid1px red;
}
.filter-label1 {
    font-size: 14px;
    margin-bottom: 48px;
    color: #666;
    font-weight: bold;
    border: solid 1px red;
}
.content {
    grid-area: content;
    padding: 20px;
    background-color: #ffffff;
    border: solid1px red;
}
*/
/* QUESTION BOX*/
/*
.question {
    padding-top: 1px;
    width: 560px;
    background-color: #EBE9E6;
    border: solid 1px blue;
    margin-top: 68px;
    margin-bottom: 136px;
}
.question-book {
    display: flex;
    width:560px;
    justify-content: space-between;
    align-items: center;
    background-color: #EBE9E6;
    margin-bottom: 16px;
    border: solid 1px blue;
}
.question-title {
    font-size: 18px;
    font-weight: bold;
    border: solid 1px red;
}
.score {
    font-size: 18px;
    color: #666;
    font-weight: bold;
    border: solid 1px green;
}
.question-body {
    border: solid 1px blue;
    font-family: Inter;
    margin-bottom:40px ;
    width:560px;
    padding: 40px;
    background-color: #FCFAFA;
}
.options label {
    display: block;
    margin-bottom: 5px;
}
    */