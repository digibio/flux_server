Template.body.events({
    'submit .add_device': function(e){
        e.preventDefault();
        console.log('adding device', e);
        Meteor.call('addDevice', {
            name: e.target.name.value,
            devId: e.target.devId.value,
            AccessToken: e.target.accessToken.value
        });
    }
});

Template.body.helpers({
    'devices': function(){
        return Hardware.find({user: this.userId()});
    }
});
