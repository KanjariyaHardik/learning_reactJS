import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          headerText: "Welcome to React!",
          contentText: "To get started, edit <code>src/App.js</code> and save to reload."
      };
  }

  render() {
      // var myStyle = {
      //     fontSize: 20,
      //     color: '#965232'
      // };
      // var i = 1;
    return (
      <div className="App">
        <Header />
        <Content />
          <Clock date={new Date()} />

          {/*<h1>{this.state.headerText}</h1>*/}
          {/*<h2>{this.state.contentText}</h2>*/}

          {/*<h4 style={myStyle}>This is Hardik..!</h4>*/}
          {/*<p>{i == 1 ? "True" : "False"}</p>*/}
          {
              // This is Single Line Comment
          }
          {
              /*
              This
              is
              Multi
              Line
              Comment
               */
          }
      </div>
    );
  }
}

class Header extends Component {
    render() {
        return(
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React!</h2>
            </div>
        );
    }
}

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "Hardik",
                    "age": "25"
                },
                {
                    "id": 2,
                    "name": "Foo",
                    "age": "35"
                },
                {
                    "id": 3,
                    "name": "Bar",
                    "age": "30"
                }
            ]
        }
    }
    render() {
        return(
            <p className="App-intro">
                <h1>What is Component ?</h1>
                <p>In this lecture, We'll go over the Component</p>
                <table>
                    <thead>
                        <th>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Age</td>
                        </th>
                    </thead>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
                    </tbody>
                </table>
            </p>
        );
    }
}

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timeID = setInterval(
            () => {this.tick()}
            , 1000 );
    }

    tick() {
        this.setState({date: new Date()});
    }

    componentWillUnmount() {
        clearInterval(this.timeID)
    }

    render() {
        return(
            <div>
                <h2>Time is : {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default App;
