import React, { Component } from 'react';

const list = [
  {
    "id": 1,
    "title": "1st todo",
    "body": "Learn django."
  },
  {
    "id": 2,
    "title": "2nd todo",
    "body": "Learn django."
  },
  {
    "id": 3,
    "title": "3rd todo",
    "body": "Learn django."
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list
    };
  }

  render() {
    return (
      <div>
        {this.state.list.map( item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;