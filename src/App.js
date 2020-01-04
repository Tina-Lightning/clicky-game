import React, { Component } from "react";
import AnimalCard from "./components/AnimalCard";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import animals from "./animals.json";


class App extends Component {

    constructor() {
        super();
        this.state = {
            isGuessCorrect: true,
            animals: animals,
            score: 0,
            maxScore: 20,
            highScore: 0,
            message: ""
        };
    }

    // Main click handler function
    handleSaveClick = id => {
        // Variable to hold the animals state.
        const animals = this.state.animals;
        // Search through animals to find the one that matches the clicked id.
        const animalClicked = animals.filter(animal => animal.id === id);

        // If the animal IS NOT clicked...
        if (!animalClicked[0].clicked) {
            // ...set it to now be clicked
            animalClicked[0].clicked = true;
            // ...call this function to register the correct guess
            this.handleCorrectClick();
            // ... randomize animals
            this.randomizeAnimals(animals);

            this.setState({ animals });
        } else {
            this.handleIncorrectClick();
        }
    };

    // Function to randomize the animals
    randomizeAnimals = animals => {
        animals.sort((a, b) => {
            return 0.5 - Math.random();
        });
    };

    // Handler for correct guesses/clicks
    handleCorrectClick = () => {
        this.setState({ isGuessCorrect: true });
        if (this.state.score + 1 > this.state.highScore) {
            this.setState({ highScore: this.state.highScore + 1 });
        }
        if (this.state.score + 1 >= this.state.maxScore) {
            this.setState({
                score: this.state.score + 1,
                message: "Congratualtions! You won!",
            });
        } else {
            this.setState({
                score: this.state.score + 1,
                message: "You guessed correctly!",
            });
        }
    };

    // Handler for incorrect guesses/clicks
    handleIncorrectClick = () => {
        this.setState({
            message: "Incorrect. Click any animal to play again.",
            isGuessCorrect: false
        });
        this.resetGame();
    };

    // Resets the game
    resetGame = id => {
        const animals = this.state.animals;
        for (let i = 0; i < animals.length; i++) {
            animals[i].clicked = false;
        }
        this.setState({ score: 0 });
    };

    // Map over this.state.animals and render a card for each animal object
    render() {
        const { message, score, animals, highScore } = this.state;
        return (
            <div className="container">

                <div className="row text-center">
                    <NavBar
                        score={score}
                        highScore={highScore}
                        message={message}
                    />
                </div>

                <div className="row">
                    {animals.map(({ id, name, image, clicked }) =>
                        <AnimalCard
                            key={id}
                            id={id}
                            name={name}
                            image={image}
                            clicked={clicked}
                            clickHandler={this.handleSaveClick}
                        />
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;