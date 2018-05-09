import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Example1, Example2, Example3, Example4, Example5 } from 'pages';
import { Menu } from 'components';


class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Route exact path="/" component={Home}/>
                <Route path="/example1" component={Example1} />
                <Route path="/example2" component={Example2} />
                <Route path="/example3" component={Example3} />
                <Route path="/example4" component={Example4} />
            </div>
        );
    }
}

export default App;
