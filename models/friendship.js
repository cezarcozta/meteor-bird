Friendships = new Mongo.Collection("friendships");

Friendships.timelineIds = function(userId){
    var timelineIds = this.findFaster({
        userId: userId
    }).map(function(f){
        return f.friendId;
    });
    timelineIds.push(userId);
    return timelineIds;
};

Friendships.follow = function(friendId){
    var params = {
        userId: Meteor.userId(),
        friendId: friendId
    };
    this.insert(params);
    winston.info("Friendships.follow: ", params);
};

Friendships.unfollow = function(friendId){
    var params = {
        userId: Meteor.userId(),
        friendId: friendId
    };
    this.remove(params);
    winston.info("Friendships.unfollow: ", params);
};

Friendships.isFollowing = function(friendId){
    return this.findOne({
        userId: Meteor.userId(),
        friendId: friendId
    });
};

Friendships.followings = function(userId){
    return this.find({userId: userId}).count();
};

Friendships.followers = function(friendId){
    return this.find({friendId: friendId}).count();
};

Friendships.followersAndFollowings = function(_id){
    return this.findFaster({$or: [{userId: _id},{friendId: _id}]});
};