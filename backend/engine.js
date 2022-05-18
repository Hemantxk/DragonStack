const Generation = require('./generation');

class GenerationEngine{
    constructor(){
        this.generation = null;
        this.timer = null;
    }

    start(){
        this.newGeneration();
    }

    stop(){
        clearTimeout(this.timer);
    }

    newGeneration(){
        this.generation = new Generation();

        console.log('new generation', this.generation);

        this.timer = setTimeout(
            () => this.newGeneration(),
            this.generation.expiration.getTime() - Date.now()
            );
    }
}

module.exports = GenerationEngine;