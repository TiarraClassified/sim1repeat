import React, {Component} from 'react';
import video from '../marsSimulation.mp4';

export default class ShelfB extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                {/* core: 56C */}
                <video autoPlay loop muted style={{width: '400px', height: '500px', marginLeft: '40%'}}>
                    <source src={video} type="video/mp4" />
                </video>
                {/* core: 56D */}
                <audio controls>
                    <source src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4"
                            type='audio/mp4'/>
                    </audio>
            </div>
        )

    }
}