import React from 'react';
import './App.css';
import Question from './components/Question';
import Options from './components/Options';
import AboutBird from './components/AboutBird';
import CtrlKey from './components/CtrlKey';
import Header from './components/Header'
import birdsData from './data/birdsData';
import correctAnswer from './data/win.mp3';
import uncorrectAnswer from './data/error.mp3';
import victorySound from './data/winner.mp3';
import randomizer from './utils/randomizer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.lastDataItem = birdsData.length - 1;
    this.clickedItems = [];

    this.firstStateOfItems = Array(birdsData.length).fill('grey');
    this.state = {
      currentScore: 0,
      scoreIncrement: 5,
      level: '0',
      rightAnswer: String(randomizer(0, this.lastDataItem)),
      chosenOption: null,
      isAnswerVisible: false,
      isActiveButton: false,
      stateOfItems: this.firstStateOfItems
    }
  }

  levelUp = () => {
    if (this.state.isActiveButton) {
      this.setState({
        level: String(+this.state.level + 1),
        rightAnswer: String(randomizer(0, this.lastDataItem)),
      }, () => {
        this.clickedItems = [];

        this.setState({
          chosenOption: null,
          isActiveButton: false,
          isAnswerVisible: false,
          scoreIncrement: 5,
          stateOfItems: this.firstStateOfItems
        })
      })
    }
  }

  makeColored = (line, color) => {
    const newStateOfItems = this.state.stateOfItems.map(el => el);
    newStateOfItems[line] = "red";
    (color === 'red') ? newStateOfItems[line] = "red" : newStateOfItems[line] = "green";
    this.setState({
      stateOfItems: newStateOfItems
    })
  }

  checkCorrectAnswer = (line) => {
    console.log('line', line);
    console.log(this.clickedItems);

    if (this.state.chosenOption === this.state.rightAnswer) {
      this.playAudio(correctAnswer);
      this.setState({
        isActiveButton: true,
        isAnswerVisible: true,
        currentScore: this.state.currentScore + this.state.scoreIncrement,
      })
    } else {
      this.playAudio(uncorrectAnswer);
      this.makeColored(line, 'red');
      this.setState({
        scoreIncrement: this.state.scoreIncrement - 1,
      })
    }
  }

  handleClick = (line) => {
    this.setState({
      chosenOption: line,
    });

    if (!this.clickedItems.includes(line)) {
      this.clickedItems.push(line);
      this.setState({
        chosenOption: line,
      }, () => {
        this.checkCorrectAnswer(line);
      })
    }
  }

  updateApp = () => {
    this.setState({
      scoreIncrement: 5,
      level: '0',
      rightAnswer: String(randomizer(0, this.lastDataItem)),
      currentScore: 0,
      chosenOption: null,
      isAnswerVisible: false,
      isActiveButton: false,
      stateOfItems: this.firstStateOfItems
    })
  }

  playAudio = (file) => {
    const audio = new Audio(file);
    audio.play();
  }

  render() {
    if (+this.state.level === birdsData.length) {
      return (
        <main>
          <Header
            level={this.state.level}
            currentScore={this.state.currentScore}
          />
          <section>
            <h1>Поздравляем!</h1>
            <p>Вы прошли викторину и набрали {this.state.currentScore} из 30 возможных баллов</p>
          </section>
          <CtrlKey
            cb={this.updateApp}
            isActive='true'
            message='Попробовать ещё раз'
          />
        </main>
      )
    } else if (+this.state.currentScore === 30) {
      return (
        <main>
          <Header
            level={this.state.level}
            currentScore={this.state.currentScore}
          />
          <div>
            <h1>Поздравляем!</h1>
            <p>Ты прошел викторину и набрал максимальное количество баллав</p>
            <h2>Отличный результат</h2>
          </div>
          {this.playAudio(victorySound)}
        </main>
      )
    } else {
      return (
        <main>
          <Header
            level={this.state.level}
            currentScore={this.state.currentScore}
          />
          <Question
            level={this.state.level}
            visibility={this.state.isAnswerVisible}
            rightAnswer={this.state.rightAnswer}
          />
          <Options
            currentState={this.state.stateOfItems}
            level={this.state.level}
            cb={this.handleClick}
          />
          <AboutBird
            level={this.state.level}
            choise={this.state.chosenOption}
          />
          <CtrlKey
            cb={this.levelUp}
            isActive={this.state.isActiveButton}
            message='Перейти к следующему вопросу'
          />
        </main>
      )
    }
  }
}

export default App;
