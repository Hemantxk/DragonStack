import React, { Component } from 'react';

import { patchy, plain, skinny, slender, sporty, spotted, stocky, striped } from '../assets/index.js';

const propertyMap = {
    backgroundColour : { 
        black  : '#263238',
        green  : '#1b5e20',
        pink   : '#c2185b',
        orange : '#e65100' },
    pattern : { plain, striped, spotted, patchy },
    build : { slender, stocky, sporty, skinny },
    size : { small: 100, medium: 140, large: 180, enormous: 220 }
};

class DragonAvatar extends Component{
    get DragonImage() {
        const dragonPropertyMap = {};

        this.props.dragon.traits.forEach(trait => {
            const { traitType, traitValue } = trait;
            dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
        });

        const { backgroundColour, pattern, build, size } = dragonPropertyMap;

        const sizing = { width: size, height: size };

        return (
        <div>
            <div className='dragon-avatar-image-wrapper'>
                <div className='dragon-avatar-image-background' style={{backgroundColor : backgroundColour, ...sizing}}></div>
                <img src={pattern} className='dragon-avatar-image-pattern' style={{...sizing}}/>
                <img src={build} className='dragon-avatar-image' style={{...sizing}}/>
            </div>
        </div>
        );
    }

    render(){
        const { generationId, dragonId, traits } = this.props.dragon;

        return (<div>
            <span>G{generationId}. </span>
            <span>I{dragonId}. </span>
            { traits.map(trait => trait.traitValue).join(', ') }
            { this.DragonImage }
        </div>);
    }
}

export default DragonAvatar;