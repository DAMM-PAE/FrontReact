import React from 'react';

class VistaCalendari extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <div>
                <h1>Calendar</h1>
                <p>Today's date is {this.state.date.toLocaleDateString()}</p>
            </div>
        );
    }
}

export default VistaCalendari;
