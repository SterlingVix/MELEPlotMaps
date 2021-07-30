import logo from './logo.svg';
import './App.css';
import ForceDirectedGraph from "./graphs/ForceDirectedGraph";
import LE1ConditionalsBoolsGraph from "./graphs/LE1ConditionalsBoolsGraph";

const data1 = {
  "title": "analytics",
  "color": "#12939A",
  "children": [
    {
      "title": "cluster",
      "children": [
        {"title": "AgglomerativeCluster", "color": "#12939A", "size": 3938},
        {"title": "CommunityStructure", "color": "#12939A", "size": 3812},
        {"title": "HierarchicalCluster", "color": "#12939A", "size": 6714},
        {"title": "MergeEdge", "color": "#12939A", "size": 743}
      ]
    },
    {
      "title": "graph",
      "children": [
        {"title": "BetweennessCentrality", "color": "#12939A", "size": 3534},
        {"title": "LinkDistance", "color": "#12939A", "size": 5731},
        {"title": "MaxFlowMinCut", "color": "#12939A", "size": 7840},
        {"title": "ShortestPaths", "color": "#12939A", "size": 5914},
        {"title": "SpanningTree", "color": "#12939A", "size": 3416}
      ]
    },
    {
      "title": "optimization",
      "children": [
        {"title": "AspectRatioBanker", "color": "#12939A", "size": 7074}
      ]
    }
  ]
};

const nodes = [{name: 'a'}, {name: 'b'}, {name: 'c'}];
const links = [
  {source: 0, target: 1, value: 10},
  {source: 0, target: 2, value: 20},
  {source: 1, target: 2, value: 20}
];

const data2 = {
  links,
  nodes,
}

const data3 = {
  links: [
    [0, 0],
    [0, 1],
    [0, 2],

    [1, 0],
    [1, 1],
    [1, 2],

    [2, 0],
    [2, 1],
    [2, 2],
  ],
  nodes: [
    [0, 0],
    [0, 1],
    [0, 2],

    [1, 0],
    [1, 1],
    [1, 2],

    [2, 0],
    [2, 1],
    [2, 2],
  ],
}


function App() {
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

      <div className="GraphsContainer">
        <div className="GraphContainer">
          <ForceDirectedGraph
            data={{
              links: [
                [0, 0],
                [0, 1],

                [1, 0],
                [1, 1],
              ],
              nodes: [
                [0, 0],
                [0, 1],

                [1, 0],
                [1, 1],
              ],
            }}
            height={240}
            width={240}
          />
        </div>

        <div className="GraphContainer">
          <ForceDirectedGraph
            data={{
              links: [
                [0, 0],
                [0, 1],
                [0, 2],

                [1, 0],
                [1, 1],
                [1, 2],
              ],
              nodes: [
                [0, 0],
                [0, 1],
                [0, 2],

                [1, 0],
                [1, 1],
                [1, 2],
              ],
            }}
            height={240}
            width={240}
          />
        </div>

        <div className="GraphContainer">
          <ForceDirectedGraph
            data={{
              links: [
                [0, 0],
                [0, 1],
                [0, 2],

                [1, 0],
                [1, 1],
                [1, 2],

                [2, 0],
                [2, 1],
                [2, 2],
              ],
              nodes: [
                [0, 1],
                [0, 2],

                [1, 0],
                [1, 2],

                [2, 0],
                [2, 1],
              ],
            }}
            height={240}
            width={240}
          />
        </div>
      </div>

      <div className="GraphsContainer">
        <div className="GraphContainer">
          <LE1ConditionalsBoolsGraph
            data={{
              links: [
                [0, 0],
                [0, 1],
                [0, 2],

                [1, 0],
                [1, 1],
                [1, 2],

                [2, 0],
                [2, 1],
                [2, 2],
              ],
              nodes: [
                [0, 1],
                [0, 2],

                [1, 0],
                [1, 2],

                [2, 0],
                [2, 1],
              ],
            }}
            height={240}
            width={240}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
