const mongoose = require ("mongoose");

var userSchema = mongoose.Schema ( {
    nom: String,
    prenom: String,
    datenaissance: String,
    pseudo: String,
    xp: String
});


var User = mongoose.model ("User", userSchema);
module.exports = User;