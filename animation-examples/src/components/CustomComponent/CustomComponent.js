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
     const { focused } = this.state;
     const isFocused = focused ? '포커스ed' : '안포커스ed';
     return (
       <div className="App">
         <div className="container">
           <input
             className={['input', this.state.focused && 'input-focused'].join(' ')}
             onFocus={this.focus}
             onBlur={this.focus}
             placeholder= {isFocused}
           />
         </div>
       </div>
     );
   }
}

export default CustomComponent;
