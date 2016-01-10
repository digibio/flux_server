Template.deviceAdd.rendered = function() {

    
}

Template.deviceAdd.events({
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
                console.log(JSON.stringify(data));
                Router.go('fluxSelect', {_id: data});
            }
            
            // navigate to list or flux // flux with ide 
            
            
            //e.target.name.value = '';
            //e.target.devId.value = '';
            //e.target.accessToken.value = '';
        });
        
    }
});

Template.deviceAdd.helpers({
    'devices': function(){
        //TODO: filter on userId
        return Hardware.find({}, {sort: {createdAt: -1}});
    }
});
