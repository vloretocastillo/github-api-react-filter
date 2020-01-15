import React from 'react';

class Filter extends React.Component {
    render() {
        return (

            <form onSubmit={(e)=> this.props.handleFormSubmit(e)} className='filter-form'>
                <input type="text" placeholder='username...' id='filter' className='filter'  /><br/>
                <input type="submit" value="Go" className='filter-submit'/>
            </form>
        
        );
      }
}

export default Filter;