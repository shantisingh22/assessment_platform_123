// import React from 'react';
import ButtonPage from "./SubmitButtonComponent.js";
import Pagination from "./Pagination.js";
import './style.css';
const Header = () => {
    return (
        <div className="header_one">
            <div className="header_one1">
                <div className="header_box2">
                    <div className="Image">
                    <img src="Logo Gr.png" className="header_logo" alt="Logo" />
                    </div>
                    <Pagination />
                </div>
                <a href="/submitbutton">
                    <ButtonPage/>
                </a>
            </div>
        </div>
    );
};
export default Header;
