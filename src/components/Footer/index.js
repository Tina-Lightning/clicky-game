import React from "react";
import "./style.css";
import Calendar from "../Calendar";

function Footer() {
    return (
        <div className="footer container-fluid text-center">
            <div className="row">
                <div className="col">
                    <div className="footer-text">© <Calendar /> Copyright: Clicky Game</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;