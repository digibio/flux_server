var checkLoggedIn = function() {
    if(!Meteor.userId()) {
        throw new Meteor.Error("not logged in");
    }
}

var NonEmptyString = Match.Where(function (x) {
    check(x, String);
    return x.length > 0;
});
var checkDevice = function(fields) {
    check(fields, {
        name: NonEmptyString,
        devId: NonEmptyString,
        accessToken: NonEmptyString
    });
}

Meteor.methods({
    addDevice: function(device) {
        checkLoggedIn();
        checkDevice(device);
        return Hardware.insert(device);
    }
});
