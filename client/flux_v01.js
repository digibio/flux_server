// counter starts at 0
Session.setDefault('toggle1', false);
var devId = '260039000347343233323032';

Template.hello.rendered = function() {
  // init.
  spark.login({
    accessToken: 'fad8cca1f42bd758b7c5684e665123d41c38b632'
  });

}

Template.hello.helpers({
  counter: function() {
    return Session.get('counter');
  },
  
  checked: function() {
    return Session.get('toggle1');
  }
  
  
});

Template.hello.events({

  "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      console.log("toggle checked");
      spark.callFunction(devId, 'led', Session.get('toggle1')?'off':'on', callback);
      Session.set('toggle1', ! Session.get('toggle1'));
    }
});

var callback = function(err, data) {
  if (err) {
    console.log('An error occurred while getting core attrs:', err);
  }
  else {
    console.log('Core attr retrieved successfully:', data);
    
  }
};
