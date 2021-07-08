import React, {useState} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';
import ImageHandler from './ImageHandler';
import reportWebVitals from './reportWebVitals';
import {Button} from "@material-ui/core";
import {countDown, secondsToTime} from "./Utils/Counter";
import WelcomeCard from "./Components/WelcomeCard";

const currentDate = new Date().toLocaleDateString();

const gameStages = ["welcome", "description", "voting", "results"];
const gameStagesDurations = {welcome: 1, description: 6, voting: 5, results: 5, ending: 0}
let currentStateIndex = 0;

class Doc extends React.Component {
    componentDidMount() {
        document.title = `Experiment ${currentDate}`
    }

    render() {
        return (null)
    }
}


class MainWindow extends React.Component {
    componentDidMount() {
        let timeLeftVar = secondsToTime(this.state.seconds);
        this.setState({time: timeLeftVar});
    }

    constructor(props) {
        super(props);
        this.state = {
            stage: gameStages[0],
            duration: gameStagesDurations[gameStages[0]],
            time: {},
            seconds: gameStagesDurations[gameStages[0]]
        };

        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = countDown.bind(this);
    }

    changeState = () => {
        if (currentStateIndex === 3) {
            currentStateIndex = 0
        } else {
            currentStateIndex++
        }

        this.setState({
            stage: gameStages[currentStateIndex],
            duration: gameStagesDurations[gameStages[currentStateIndex]],
            time: {},
            seconds: gameStagesDurations[gameStages[currentStateIndex]]
        });

        this.timer = 0

        this.startTimer()
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    CurrentStagePage = () => {
        if (this.state.stage === gameStages[0]) {  //WELCOME STAGE
            return (<React.StrictMode>
                <Doc/>
                <header className="header">
                    <div className="header-container">
                        <h1 className="title">Welcome</h1>
                    </div>
                </header>
                <main className="container">
                    <WelcomeCard onChildClick={this.changeState}/>
                </main>
                <footer>
                    <div className="footer-container">
                        <span>Ritsumeikan University - Intelligent Computer Entertainment Lab</span>
                    </div>
                </footer>
            </React.StrictMode>)
        } else if (this.state.stage === gameStages[1]) { //DESCRIPTION STAGE
            this.startTimer()
            return (
                <React.StrictMode>
                    <Doc/>
                    <header className="header">
                        <div className="header-container">
                            <h1 className="title">Description session: {this.state.time.s}</h1>
                        </div>
                    </header>
                    <main className="container">
                        <ImageHandler/>
                    </main>
                    <footer>
                        <div className="footer-container">
                            <span>Ritsumeikan University - Intelligent Computer Entertainment Lab</span>
                        </div>
                    </footer>
                </React.StrictMode>
            )
        } else if (this.state.stage === gameStages[2]) { //VOTING STAGE
            return (
                <React.StrictMode>
                    <Doc/>
                    <header className="header">
                        <div className="header-container">
                            <h1 className="title">Voting stage: {this.state.time.s}</h1>
                        </div>
                    </header>
                    <main className="container">
                        Voting would be here
                    </main>
                    <footer>
                        <div className="footer-container">
                            <span>Ritsumeikan University - Intelligent Computer Entertainment Lab</span>
                        </div>
                    </footer>
                </React.StrictMode>
            )
        } else if (this.state.stage === gameStages[3]) { //RESULTS STAGE
            return "RESULTS STAGE"
        }

        return "THE END. THANK YOU"
    }

render() {
    return(

    this
.

    CurrentStagePage()

)
}

}

ReactDOM.render(
<MainWindow/>
,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
