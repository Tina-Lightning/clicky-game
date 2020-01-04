import React from "react";
import "./style.css";

// {message}
// SCORE: {score}
// TOP SCORE: {highScore}

function NavBar({ message, score, highScore }) {
    return (
        <div className="top-nav container-fluid">
            <div className="row">
                <div className="col">
                    <h1>Clicky Game</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Click on an image to earn points,<br />
                        But don't click on any image than once!</p>
                </div>
            </div>
            <div className="row">
            <div className="col">
                <p>{message}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>Score: {score}</h4>
                </div>
                <div className="col">
                    <h4>High Score: {highScore}</h4>
                </div>
            </div>
        </div>
    );
}

export default NavBar;