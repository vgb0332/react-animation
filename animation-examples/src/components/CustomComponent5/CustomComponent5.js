import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';

const VelocityLetter = ({ duration, letter }) => (
  <VelocityComponent
    runOnMount
    animation={{ opacity: 1, marginTop: 0 }}
    duration={duration ? duration: 1000}
  >
    <p style={styles.letter}>{letter}</p>
  </VelocityComponent>
)

class CustomComponent5 extends Component {
  state = {
    letters: [],
    anotherLetters: []
  }
  onChange = (e) => {
    const letters = e.target.value.split('');
    const arr = []
    letters.forEach((l, i) => {
      const r = Math.floor((Math.random() * 1000) + 1);
      arr.push(<VelocityLetter key={i} duration={r} letter={l} />)
    })
    this.setState(() => ({ letters: arr }))
  }

  onAnotherChange = (e) => {
    const letters = e.target.value.split('');
    const arr = []
    letters.forEach((l, i) => {
      const r = Math.floor((Math.random() * 1000) + 1);
      arr.push(<VelocityLetter key={i} letter={l} />)
    })
    this.setState(() => ({ anotherLetters: arr }))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <input onChange={this.onChange} style={styles.input} />
          <div style={styles.letters}>
            {
              this.state.letters
            }
          </div>
          <input onChange={this.onAnotherChange} style={styles.input} />
          <div style={styles.letters}>
            {
              this.state.anotherLetters
            }
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  input: {
    height: 40,
    backgroundColor: '#ddd',
    width: 200,
    border: 'none',
    outline: 'none',
    marginBottom: 20,
    fontSize: 22,
    padding: 8,
  },
  letters: {
    display: 'flex',
    height: 140,
  },
  letter: {
    opacity: 0,
    marginTop: 100,
    fontSize: 22,
    whiteSpace: 'pre',
  }
}

export default CustomComponent5;
