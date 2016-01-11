Hardware = new Mongo.Collection('hardware');

Hardware.before.insert(function(userId, device){
    device.createdAt = Date.now();
    device.owner = userId;
});

