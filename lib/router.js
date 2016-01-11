Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound' 
}); 

Router.route('/');

Router.route('/devices', {
    name: 'devicesList'
});
Router.route('/devices/add', {
    name: 'addDevice'
});

Router.route('/devices/:_id', {
    name: 'fluxelmap',
    template: 'fluxelmap',
    data: function() {
        var device = Hardware.findOne({
            _id: this.params._id
        });
        Session.set('devId', device.devId);
        Session.set('accessToken', device.accessToken);
        return device;
    }
});

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

