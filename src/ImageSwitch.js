import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

//borrowed from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


const imgArray = [
    "https://img.icons8.com/nolan/96/000000/ruby-programming-language.png",
    "https://img.icons8.com/nolan/96/000000/swift.png",
    "https://img.icons8.com/nolan/96/000000/api-settings.png",
    "https://img.icons8.com/nolan/96/000000/console.png",
    "https://img.icons8.com/nolan/96/000000/markdown.png",
    "https://img.icons8.com/nolan/96/000000/bug.png",
    "https://img.icons8.com/nolan/96/000000/plugin.png",
    "https://img.icons8.com/nolan/96/000000/module.png",
    "https://img.icons8.com/nolan/96/000000/commit-git.png",
    "https://img.icons8.com/nolan/96/000000/web-design.png",
    "https://img.icons8.com/nolan/96/000000/stack.png",
    "https://img.icons8.com/nolan/96/000000/upload.png",
];
const idImgArray = imgArray.map((url, index) => {
    return {
        url: url,
        id: index,
    };
});


const Column = ({ url, id, refreshClicked }) => {
    return (
        <div className="col-sm" >
            <img src={url} onClick={refreshClicked} id={id} />

        </div>
    );
};

const Row = ({ rowSet, refreshClicked }) => {
    return (
        <div className="row">
            <Column url={rowSet[0].url} id={rowSet[0].id} refreshClicked={refreshClicked} />
            <Column url={rowSet[1].url} id={rowSet[1].id} refreshClicked={refreshClicked} />
            <Column url={rowSet[2].url} id={rowSet[2].id} refreshClicked={refreshClicked} />
        </div>
    );
};

class ImageSwitch extends Component {

    state = {
        clicked: [],
    };
    refreshClicked = (e) => {

        const id = e.target.id
        if (this.state.clicked.includes(id)) {
            this.setState({ clicked: [] })
        } else {
            const clicked = this.state.clicked.concat(id)
            this.setState({ clicked: clicked })
        }
    };

    render() {
        console.log(this.state.clicked)
        console.log("score: ", this.state.clicked.length)
        shuffle(idImgArray);
        const rowSet1 = [];
        const rowSet2 = [];
        const rowSet3 = [];
        const rowSet4 = [];
        idImgArray.forEach((img) => {
            if (rowSet1.length !== 3) {
                rowSet1.push(img)
            } else if (rowSet2.length !== 3) {
                rowSet2.push(img)
            } else if (rowSet3.length !== 3) {
                rowSet3.push(img)
            } else {
                rowSet4.push(img)
            }
        });

        return (
            <div>
                <div id="score">
                <p>Your score: {this.state.clicked.length}</p>
                </div>
                <div className="container">
                    <Row rowSet={rowSet1} refreshClicked={this.refreshClicked} />
                    <Row rowSet={rowSet2} refreshClicked={this.refreshClicked} />
                    <Row rowSet={rowSet3} refreshClicked={this.refreshClicked} />
                    <Row rowSet={rowSet4} refreshClicked={this.refreshClicked} />
                </div>

            </div>
        );
    }
}

export default ImageSwitch;


