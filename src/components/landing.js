import React from 'react';
import Filter from './filter.js';


class Landing extends React.Component {

    // componentWillUpdate() {
    //     console.log('WILL UNMOUNT')
    // }
    render() {
        return (

            <section className='landing'>
                <h1>Welcome to our Github Searcher</h1>
                <h3>Type a username and click 'Search'</h3>
                <Filter handleFormSubmit={this.props.handleFormSubmit }/>
            </section>
        
        );
      }
}

export default Landing;
