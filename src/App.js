import React from 'react';
import './App.css';
import Landing from './components/landing.js';
import UserCard from './components/userCard.js';
import RepoCards from './components/repoCards.js';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


class App extends React.Component {
  state = {
    displayLanding : true,
    displayUser: false,
    displayRepos: false,
    username : '',
    data : false,
    repos : []
  }

  handleClickGoToLanding = () => {
    this.setState({ displayLanding: true })
  }

  handleClickGoToRepos = () => {
    let { repos_url } = this.state.data    

    fetch(repos_url)
      .then( (res) => {
          if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              res.status);
            return;
          }
          return res.json()
        })
      .then((repos) => {
          console.log(repos)
          if(repos) {
            this.setState({
              repos,
              displayLanding: false,
              displayUser: false,
              displayRepos: true

            })
          }
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }
  
  handleFormSubmit = (e) => {
    e.preventDefault()
    
    

    let username = document.getElementById('filter').value.trim()

    // Check if the username entered is already loadind in the state and avoid making unnecesary requests
    if (this.state.data && username === this.state.username) {
      this.setState({
        displayLanding: false,
        displayUser: true,
        displayRepos: false
      })
      return;
    }

    
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
          if(data) {
            this.setState({
              username,
              data,
              displayLanding: false,
              displayUser: true,
              displayRepos: false

            })
          }
        })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });

  }

  render() {

    let content;
    if ( this.state.displayLanding  ) {
      content = <Landing key={1} handleFormSubmit={this.handleFormSubmit}/>;
    } else if ( this.state.displayUser ) {
      content = <UserCard key={2} user={ this.state.data } handleClickGoToLanding={ this.handleClickGoToLanding } handleClickGoToRepos={this.handleClickGoToRepos }/>;
    } else if ( this.state.displayRepos ) {
      // content = <
      content = <RepoCards />
    }
     
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
          {/* { this.state.displayRepos ? <RepoCards /> : false} */}
          {/* { this.state.displayLanding ? <Landing key={1} handleFormSubmit={this.handleFormSubmit}/> : false } */}
          {/* { this.state.data && !this.state.displayLanding ? <UserCard key={2} user={ this.state.data } handleClickGoToLanding={ this.handleClickGoToLanding } handleClickGoToRepos={this.handleClickGoToRepos }/> : false } */}
          
          { content }
          

          
            
          

          
        </CSSTransitionGroup>
        
        </div>
    
    );
  }
  
}

export default App;
