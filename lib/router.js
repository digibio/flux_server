Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound' //,
        //	waitOn: function(){ return [  Meteor.subscribe('events'),Meteor.subscribe('ZKAccesses'),Meteor.subscribe('ZKAudiences'), Meteor.subscribe('ZKSchemas'),Meteor.subscribe('reservations'),
        //        Meteor.subscribe('messages'), Meteor.subscribe('ZKObjects'), Meteor.subscribe('myAttachments') ]; }
}); //Meteor.subscribe('ZKObjects'),Meteor.subscribe('ZKObjectsUsers')

//Meteor.subscribe('ZKObjects'), Meteor.subscribe('ZKObjectsUsers'),

Router.route('/', {name: 'flux'});
//Router.route('/reservations', {name: 'reservationsList'});

Router.route('/devices', {
    name: 'devicesList'
});
Router.route('/devices/add', {
    name: 'deviceAdd'
});

// Router.route( '/devices/:_id', function(){
//     this.render('flux', {
//         data: function() { 
//             var device = Hardware.findOne({_id: this.params._id});
//             Session.set('devId', device.devId);
//             Session.set('accessToken', device.accessToken);
//             return device;
//         },
//     });
// }); 

Router.route('/devices/:_id/select', {
    name: 'fluxSelect',
    data: function() {
        var device = Hardware.findOne({
            _id: this.params._id
        });
        Session.set('devId', device.devId);
        Session.set('accessToken', device.accessToken);
        return device;
    }
});



/*Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function() { return Posts.findOne(this.params._id); }
}); */

/*
 Router.route('/events/:_id' , {
 	name: 'eventPageDetail',
 	data: function() { return Events.findOne(this.params._id); }
  });
 
  Router.route('/events/:_id/edit', {
    name: 'eventEdit',
    data: function() { return Events.findOne(this.params._id); }
  });
  
  Router.route('/reservations/:_id', {
    name: 'reservationItemDetail',
    data: function() { return Reservations.findOne(this.params._id); }
  });
  
  Router.route('/reservations/:_id/edit', {
    name: 'reservationEdit',
    data: function() { return Reservations.findOne(this.params._id); }
  });

Router.route('/messages/:_id/edit', {
    name: 'messagesEdit',
    data: function() { return Messages.findOne(this.params._id); }
});

Router.route('/audience/:_id/edit', {
    name: 'audienceAddUser',
    data: function() { return ZKAudiences.findOne({_id: this.params._id}); }
});


Router.route('/zko/:_id/edit', {
    name: 'ZKObjectInteract',
    data: function() { return ZKObjects.findOne(this.params._id); }
});
  
  
  
  Router.route('/events/:_id/reserve', {
    name: 'reserveEventPage',
    data: function() { return Events.findOne(this.params._id); }
  });
  

Router.route('/message/submit', {name: 'messageSubmit'});
Router.route('/zko/submit', {name: 'ZKObjectSubmit'});
Router.route('/zko/add', {name: 'ZKObjectAdd'});
Router.route('/submit', {name: 'eventSubmit'});
Router.route('/keys/create', {name: 'createKeys'});
Router.route('/audiences/create', {name: 'audienceKeys'});
  
 */

var requireLogin = function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        }
        else {
            this.render('accessDenied');
        }
    }
    else {
        this.next();
    }
}

//Router.onBeforeAction('dataNotFound', {only: ['flux', 'eventPage', 'reserveEventPage', 'ZKObjectInteract']});
Router.onBeforeAction(requireLogin, {
    only: ['flux']
});

/* Router.route('/');

Router.route( '/devices/:_id', function(){
    this.render('flux', {
        data: function() { 
            var device = Hardware.findOne({_id: this.params._id});
            Session.set('devId', device.devId);
            Session.set('accessToken', device.accessToken);
            return device;
        },
    });
}); */
