Router.route('/');

Router.route( '/devices/:_id', function(){
    this.render('flux', {
        data: function() { 
            return Hardware.findOne({_id: this.params._id});
        },
    });
});

