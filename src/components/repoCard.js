import React from 'react';


class RepoCard extends React.Component {
    
    render() {

        



        return (
            
            <div className='repo-card'>
                
                <h1>{this.props.name}</h1>
                <a href={this.props.url} target="_blank">Go to project</a>
            </div>
        
        );
      }
}

export default RepoCard;