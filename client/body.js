Template.body.events({
    'submit .add_device': function(e){
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
            e.target.name.value = '';
            e.target.devId.value = '';
            e.target.accessToken.value = '';
        });
        
    }
});

