import React from 'react';
import {Button, TextField, withStyles} from "@material-ui/core";
import {lightBlue} from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
    root: {
        color: "white",
        backgroundColor: lightBlue[500],
        '&:hover': {
            backgroundColor: lightBlue[700],
        },
        margin: "10px",
        display: "block"
    },
}))(Button);

const SkipButton = withStyles((theme) => ({
    root: {
        margin: "10px",
        display: "block"
    },
}))(Button);

const ColorInput = withStyles((theme) => ({
    root: {
        display: "block",
        margin: "10px",
        '& label.Mui-focused': {
            color: 'lightblue',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'lightblue',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: 'lightblue',
            },
        },
    },
}))(TextField);

class ImageHandler extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            avatarName: 4,
            ukiyoeName: 1,
            play: false
        }

        this.ticks = 1000;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.timeOut();
    }

    tickTimesOut() {
        this.setState((prevState, props) => ({
            avatarName: prevState.avatarName - 1 == 0 ? 1 : prevState.avatarName - 1
        }));

        this.ticks = 5000

        this.timeOut()
    }

    timeOut = () => {
        this.timeoutID = setTimeout(
            () => this.tickTimesOut(),
            this.ticks
        );
    }
    
    updateImages = () => {
        this.setState((prevState, props) => ({
            avatarName: prevState.avatarName + 1 > 5 ? 5 : prevState.avatarName + 1,
            ukiyoeName: Math.floor(Math.random() * 20) + 1
        }));
    }

    getAvatarName = () => this.state.avatarName

    getUkiyoeName = () => this.state.ukiyoeName

    handleSubmit(event) {
        this.updateImages();

        this.url = "./audio/thank_you.mp3";
        this.audio = new Audio(require("./audio/thank_you_f.mp3").default);
        this.audio.crossOrigin = 'anonymous';

        this.audio.play();
    }

    render() {
        const avatarName = this.getAvatarName();
        const ukiyoeName = this.getUkiyoeName();

        return(
            <div className="row">
                <div className="column col-6">
                    <div className="row">
                        <img className="ukiyoe-responsive" src={ require(`./img/ukiyoe/${ukiyoeName}.jpg`).default } />
                    </div>
                    <div className="row">
                        <ColorInput
                            color="red"
                            fullWidth
                            id="outlined-basic"
                            label="Your description"
                            variant="outlined" />
                        <ColorButton
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                this.handleSubmit()
                            }}>
                            Submit description
                        </ColorButton>

                        <SkipButton
                            variant="outlined"
                            color="secondary"
                            onClick={() => {
                                this.handleSubmit()
                            }}>
                            Skip
                        </SkipButton>
                    </div>
                </div>

                <div className="column col-6">
                    <img className="img-responsive" src={ require(`./img/avatar/${avatarName}.png`).default } />
                </div>
            </div>
        );
    }
}

export default ImageHandler;
