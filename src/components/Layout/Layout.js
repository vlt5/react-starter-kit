import React from 'react';

require('./Layout.less');

export default class Layout extends React.Component {
    render() {
        return (
            <div className='layout'>
                <h1>Hey there!</h1>
                <p>Below is a simple image demo:</p>
                <div className='img-test'></div>
            </div>
        );
    }
}