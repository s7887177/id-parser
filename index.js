
module.exports = function (type){

    switch (type) {
        case 'mongodb':
            const {ObjectId} = require('mongodb');
            return function (req, res, next){
                if(req.body){
                    if(req.body._id){
                        req.body._id = ObjectId(req.body._id);
                    }
                }
                next();
            }
        default:
            break;
    }
}