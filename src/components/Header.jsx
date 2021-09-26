import React, { Component } from 'react'
import './css/HeaderCSS.css';


export class Header extends Component {
    render() {
        return (
            <div>

                    <div className='Header' >
                        <div className='title'><a href='/'>NetPad</a></div>
                    </div>

            </div>
        )
    }
}

export default Header
