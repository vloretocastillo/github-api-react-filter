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

        let { user } = this.state
        
        return (
            <section className='user-card'>
                <h2>{ user.login }</h2>
            </section>
        
        );
      }
}

export default UserCard;