import React from 'react';

class UserCard extends React.Component {
    state = {
        user: false
    }

   

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.user)
        this.setState({
            user : nextProps.user
        })
    }
    render() {

        let { login, name, avatar_url, followers, following, location, public_repos, html_url, repos_url } = this.state.user
        



        return (
            <section className='user-card-container'>
                <div className='card'>
                    <article className='avatar-container'>
                        <div className='avatar-wrapper'>
                            <img src={ avatar_url } alt="user's avatar picture"/>
                        </div>
                    </article>
                    <article className='info-container'>
                        <h2>{ login } </h2>
                        <h4>{ name }</h4>
                    </article>
                </div>
            </section>
        
        );
      }
}

export default UserCard;