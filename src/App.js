import React from 'react';
import './App.css';
import Landing from './components/landing.js';
import UserCard from './components/userCard.js';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


class App extends React.Component {
  state = {
    displayLanding : true,
    username : '',
    data : false
  }

  

  handleFormSubmit = (e) => {
    e.preventDefault()
    let username = document.getElementById('filter').value.trim()
    this.setState({
      username,
      displayLanding: false
    })

    // console.log(this.state)
    fetch(`https://api.github.com/users/${username}`)
      .then( (res) => {
          if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              res.status);
            return;
          }
          return res.json()
        })
        .then((data) => {
          this.setState({ data })
          // console.log(data);
        })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });

  }

  render() {
     
    return (
        <div className="App">
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={true}
          transitionEnterTimeout={1000}
          transitionLeave={true}
          transitionLeaveTimeout={1000}>
          {this.state.displayLanding ? <Landing key={1} handleFormSubmit={this.handleFormSubmit}/> : false}
          {this.state.data ? <UserCard key={2} user={ this.state.data }/> : false}
        </CSSTransitionGroup>
        </div>
    
    );
  }
  
}

export default App;
