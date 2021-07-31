import _ from 'lodash';
import * as LE1Data from './data/LE1data';
import logo from './logo.svg';
import './App.css';
import LE1ConditionalsBoolsGraph from "./graphs/LE1ConditionalsBoolsGraph";
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphContainerHeight: undefined,
      graphContainerWidth: undefined,
    };
  }

  handleRef = (el) => {
    const graphContainerHeight = el.getBoundingClientRect().height;
    const graphContainerWidth = el.getBoundingClientRect().width;
    this.setState({
      graphContainerHeight,
      graphContainerWidth,
      graphContainerMinSize: _.min([
        graphContainerHeight,
        graphContainerWidth,
      ]),
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div className="mainView">
          <div
            className="GraphsContainer"
            ref={this.handleRef}
          >
            {(this.state.graphContainerMinSize) && (
              <div className="GraphContainer">
                <LE1ConditionalsBoolsGraph
                  data={LE1Data}
                  height={this.state.graphContainerMinSize}
                  width={this.state.graphContainerMinSize}
                />
              </div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
