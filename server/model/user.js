const mongoose = require('mongoose');
// const levelSchema = require('./Level');
// const factionSchema = require('./Factions');

const userSchema = new mongoose.Schema({
    // Unique identifier provided by Google authentication
    googleId: {
        type: String,
        unique: true,
        required: true,
    },
    // User's name
    name: {
        type: String,
        required: true,
    },
    // User's email address
    email: {
        type: String,
        required: true,
    },
    // URL of the user's profile picture
    picture: {
        type: String,
    },
    inventory: [{
        type: String,
        items: [ ]
    }],
    bank: {type: Number, default:0 },// default
    level: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Level'
      }],
    faction: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: 'Faction'
    }],
    locaiton: {
        type: { type: String },
        coordinates: [Number]
    },

    // References to tokens associated with the user
    tokens: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Token',
        },
    ],
});

// Export the schema as a mongoose model
module.exports = mongoose.model('User', userSchema);
