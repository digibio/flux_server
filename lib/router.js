Router.route('/');

Router.route( '/devices/:_id', function(){
    this.render('flux', {
        data: function() { 
            var device = Hardware.findOne({_id: this.params._id});
            Session.set('devId', device.devId);
            Session.set('accessToken', device.accessToken);
            return device;
        },
    });
});

