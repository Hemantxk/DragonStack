const pool = require('../../databasePool');

class TRAITTABLE{
    static getTraitId({ traitType, traitValue }){
        return new Promise((resolve, reject) => {
            pool.query(
                'SELECT id FROM trait WHERE "traitType" = $1 AND "traitValue" = $2',
                [traitType, traitValue],
                (error, response) => {
                    if(error) return reject(error);

                    resolve({ traitId : response.rows[0].id });
            });
        });
    }
}

module.exports = TRAITTABLE;