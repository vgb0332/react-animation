import React, { Component } from 'react';
import './CustomComponent.css';

class CustomComponent extends Component {
  state = {
     focused: false
   }
   componentDidMount() {
   }
   focus = () => {
     console.log('focus called');
     this.setState((state) => ({ focused: !state.focused }))
   }
   render() {
     console.log('rendering');
     return (
       <div className="App">
         <div className="container">
           <input
             className={['input', this.state.focused && 'input-focused'].join(' ')}
             onFocus={this.focus}
             onBlur={this.focus}
           />
         </div>
       </div>
     );
   }
}

export default CustomComponent;
