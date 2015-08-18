Posts = new Mongo.Collection("posts");

Posts.publish = function(message, name){
    var params = {
        message: message,
        date: new Date(),
        userId: Meteor.userId(),
        name: name
    };
    this.insert(params);
};

Posts.list = function(userId){
    return this.find(
        {userId: {"$in": userId}},
        {sort: {time: -1, name: 1}}
    );
};