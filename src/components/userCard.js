import React from 'react';

// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


class UserCard extends React.Component {
    state = {
        user: false
    }

   

    componentWillReceiveProps(nextProps) {
        this.setState({
            user : nextProps.user
        })
    }
    render() {

        let { login, name, avatar_url, followers, following, location, public_repos, html_url } = this.state.user
        



        return (
            
            <section className='user-card-container'>
                <div className='card'>
                    <article className='avatar-container'>
                        <div className='avatar-wrapper'>
                            <img src={ avatar_url } alt="user's avatar picture"/>
                        </div>
                    </article>
                    <article className='info-container'>
                        <div>
                            <h2>{ login } </h2>
                            <h4>{ name }</h4>
                        </div>
                        <div className='count-container'>
                            <p>Followers: { followers }</p> 
                            <p>Following: { following }</p>
                        </div>
                        <p className='location-p'>{ location ? `Location: ${location}` : false  }</p>
                        <p className='public-repos-p'>Public repos: { public_repos }</p>
                        <a href={html_url} target="_blank" ><button className='button-github-link'>Visit the profile</button></a>
                    </article>
                </div>
                <div className='buttons-container'>
                    <button className='back-action' onClick={ () => this.props.handleClickGoToLanding() }>Go Back</button>
                    <button className='repos-action' onClick={ () => this.props.handleClickGoToRepos()} >See Repos</button>
                </div>
            </section>
        
        );
      }
}

export default UserCard;