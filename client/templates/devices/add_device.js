Template.addDevice.rendered = function() {
}

Template.addDevice.events({
    'submit .add_device': function(e){
        console.log("submit add device");
        e.preventDefault();
        Meteor.call('addDevice', {
            name: e.target.name.value,
            devId: e.target.devId.value,
            accessToken: e.target.accessToken.value
        }, function(err, data) {
            if(err) {
                console.log('error occured adding device');
                //todo: error message in form
            }
            if(data){
                Router.go('fluxelmap', {_id: data});
            }
        });
        
    }
});

