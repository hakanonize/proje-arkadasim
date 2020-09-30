const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    password : {
        type: String,
        trim:true,
    },
    email: {
        type:String,
        trim: true
    },
    skills: [
        {
            type: String,
            trim:true
        }
    ],
    createdProjects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ],
    projectInvolved: [{
        type: Schema.Types.ObjectId,
        ref : 'Project'
    }]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User',userSchema);
module.exports = User;