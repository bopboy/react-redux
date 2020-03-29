import React, { Component } from 'react';

export default class DisplayNumber extends Component {
    render() {
        return (
            <div><h2>Display Number</h2>
                <input type="text" value="0" readOnly></input>
            </div>
        );
    }
}
