const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    pname : {
        type:String,
        required: true,
        minlength: 3,

    },
    shortex: {
        type: String,
        required: true,

    },
    pdescription: {
        type: String,
        required: true,

    },
    pcreator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
        
    },
    pmembers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    pqualifications: [
        {
            type:String,
            required:true
        }
    ]

});

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;