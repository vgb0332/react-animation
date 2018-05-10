import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CustomComponent3.css';

import { Motion, spring } from 'react-motion';

class CustomComponent3 extends Component {
  state = {
    height: 38,
    top: 0,
    left: 0,
    activate: false,
    message : false,
  }
  animate = () => {
    this.setState((state) => ({ height: state.height === 260 ? 38 : 260 }))
  }

  keyUp = () => {
    if(this.state.top - 10 < 0) return false;
    this.setState((state) => ({ top: state.top-10 }))
  }

  keyDown = () => {
    this.setState((state) => ({ top: state.top+10 }))
  }

  keyLeft = () => {
    if(this.state.left - 10 < 0) return false;
    this.setState((state) => ({ left: state.left-10 }))
  }

  keyRight = () => {
    this.setState((state) => ({ left: state.left+10 }))
  }

  activate = () => {
    this.setState((state) => ({ activate: !this.state.activate }));
  }

  onKeyDown = (e) => {
    e.preventDefault();
    console.log(e.key);
    if(e.key === 'ArrowLeft'){
      this.keyLeft();
    }
    else if(e.key === 'ArrowRight'){
      this.keyRight();
    }
    else if(e.key === 'ArrowUp'){
      this.keyUp();
    }
    else if(e.key === 'ArrowDown'){
      this.keyDown();
    }
    else if(e.key === 'a'){
      let whatToReturn = <div>What</div>;
      if(this.state.message){
        whatToReturn = false;
      }
      this.setState((state)=>({message: whatToReturn}))
    }
    else if(e.key === 'b'){
      let whatToReturn = <div>PikaPika</div>;
      if(this.state.message){
        whatToReturn = false;
      }
      this.setState((state)=>({message: whatToReturn}))
    }
    else{
      return false;
    }
  }

  componentDidUpdate () {
    // this.addEventListener('keydown', this.onKeyDown);
    // ReactDOM.findDOMNode(this).addEventListener('keydown', this.onKeyDown);
    if(this.state.activate){
       document.addEventListener('keydown', this.onKeyDown);
    }
    else{
       document.removeEventListener('keydown', this.onKeyDown);
    }
  }

  render() {
    const { activate, message } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <div style={styles.button} onClick={this.animate}>Animate</div>
        <Motion style={{ height: spring(this.state.height) }}>
          {
            ({ height }) => <div style={Object.assign({}, styles.menu, { height } )}>
              <p style={styles.selection}>Selection 1</p>
              <p style={styles.selection}>Selection 2</p>
              <p style={styles.selection}>Selection 3</p>
              <p style={styles.selection}>Selection 4</p>
              <p style={styles.selection}>Selection 5</p>
              <p style={styles.selection}>Selection 6</p>
            </div>
          }
        </Motion>
        <br></br>
        <div style={{position:'relative', width:'100%', height:'100px'}}>
          <div style={Object.assign({}, styles.arrowButton, {top:'0', left:'40px'} )} onClick={this.keyUp}>
             <i className="arrow up"></i>
          </div>
          <div style={Object.assign({}, styles.arrowButton, {top:'40px', left:'40px'} )} onClick={this.keyDown}>
            <i className="arrow down"></i>
          </div>
          <div style={Object.assign({}, styles.arrowButton, {top:'40px', left:'0'} )} onClick={this.keyLeft}>
            <i className="arrow left"></i>
          </div>
          <div style={Object.assign({}, styles.arrowButton, {top:'40px', left:'80px'} )} onClick={this.keyRight}>
            <i className="arrow right"></i>
          </div>
        </div>

        <div style={styles.button} onClick={this.activate}> {activate ? 'Deactivate' : 'Activate'} KeyBoard Event </div>

        <div style={styles.iconContainer}>
          <Motion style={{
                           top: spring(this.state.top),
                           left: spring(this.state.left),
                        }}>
              {
                ( {top, left} ) =>
                        <div id="icon" style={Object.assign({}, styles.icon, { top, left } )}>

                          <a>
                            <img width="100" height="100" src="http://www.cartoonbucket.com/wp-content/uploads/2015/05/Tired-Pikachu-Image-600x421.jpg" alt="Tired Pikachu Image" />
                          </a>

                          { message }

                        </div>
              }
          </Motion>
        </div>
      </div>
    );
  }
}

const styles = {
  menu: {
    overflow: 'hidden',
    border: '2px solid #ddd',
    width: 300,
    marginTop: 20,
  },
  selection: {
    padding: 10,
    margin: 0,
    borderBottom: '1px solid #ededed'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    width: 200,
    height: 45,
    border: 'none',
    borderRadius: 4,
    backgroundColor: '#ffc107',
  },
  arrowButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    width: 40,
    height: 40,
    border: 'none',
    borderRadius: 4,
    backgroundColor: '#b6f3b2',
  },

  iconContainer: {
    position : 'relative',
    border: '1px solid black',
    height: '200px',
    width: '100%',
    marginTop: '20px',
  },
  icon: {
    position: 'absolute',
    top: '10px',
    left: '0',
  }
}

export default CustomComponent3;
