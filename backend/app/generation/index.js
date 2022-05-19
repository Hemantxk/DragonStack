const Dragon = require('../Dragon');
const { REFRESH_RATES, SECONDS } = require('../config.js');

const refreshRate = REFRESH_RATES * SECONDS;

class Generation{
    constructor(){
        this.expiration = this.calculateExpiration();
    }

    calculateExpiration(){
        const expirationPeriod = Math.floor(Math.random() * (refreshRate/2));

        const msUntilExpiration = Math.random() < 0.5 ? 
        refreshRate - expirationPeriod:
        refreshRate + expirationPeriod;

        return new Date(Date.now() + msUntilExpiration);
    }

    newDragon(){
        if(Date.now() > this.expiration){
            throw new Error(`this generation expired on ${this.expiration}`);
        }
        
        return new Dragon();
    }
}

module.exports = Generation;