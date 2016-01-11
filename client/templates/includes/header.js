Template.header.helpers({
    activeRouteClass: function(/* route names */) {
        // what is this?
        var args = Array.prototype.slice.call(arguments, 0);
        args.pop();

        var active = _.any(args, function(name) {
            //console.log("Router current: " + Router.current() + " Router.current.route: " + Router.current().route.getName() + "name " + name  );
            return Router.current() && Router.current().route.getName() === name
        });
        //console.log("header here: " + active);
        return active && 'active';
    },
    'devices': function(){
        //TODO: filter on userId
        return Hardware.find({owner: Meteor.userId()}, {sort: {createdAt: -1}});
    }
});
