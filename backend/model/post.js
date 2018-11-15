const mongoose = require('mongoose');

const postSchema =  mongoose.Schema({
    // projectname:{type:String, required: true},
    // projectdesc:{type:String, required: true},
    // clientname:{type:String, required: true},
    // projectmanager:{type:String, required: true},
    // projectcost:{type:String, required: true}

    title: { type: String, required: true },
    content: { type: String, required: true }
  
    
});

module.exports = mongoose.model("Post",postSchema)