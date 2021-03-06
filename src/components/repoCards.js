import React from 'react';
import RepoCard from './repoCard.js';



class RepoCards extends React.Component {
    
    render() {

        let cards;
        if (this.props.repos.length == 0) {
            cards = 'No repos Available'
        } else {
            cards = this.props.repos.map(el => {
                return <RepoCard name={el.name} url={el.html_url}/>
            })
        }


        return (
            
            <section className='repos-card-container'>
                <div className='user-info-container-repo-view'>
                    
                    <button className='back-action' onClick={ ()=> this.props.handleClickGoToUserCard() }> Back </button>
                </div>
                { cards }
            </section>
        
        );
      }
}

export default RepoCards;