Template.devicesList.rendered = function() {
}

Template.devicesList.events({
});

Template.devicesList.helpers({
    'devices': function(){
        //TODO: filter on userId
        return Hardware.find({owner: Meteor.userId()}, {sort: {createdAt: -1}});
    }
});
