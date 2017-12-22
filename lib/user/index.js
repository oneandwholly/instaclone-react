const bcrypt = require('bcrypt-nodejs');

const models = require('../../models');

exports.createUser = (userData = {}, cb) => {
    // do some stuff here like hash their password, etc
    const hashPromise = new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) { return cb(err); }
        
            // hash (encrypt) password with salt
            bcrypt.hash(userData.password, salt, null, (err, hash) => {
                if (err) { return cb(err); }
        
                // overwrite plain text password w/ encrypted password
                userData.password = hash;
                resolve();    
            });
        });
    })
    
    return hashPromise.then(() => {
        return models.User.create(userData, cb);
    })
};