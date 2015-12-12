
  // counter starts at 0
  //Session.setDefault('counter', 0);
Template.hello.rendered = function() {
    // init.
    spark.login({accessToken: 'fad8cca1f42bd758b7c5684e665123d41c38b632'});

  }
  
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      var devId = '260039000347343233323032';
    spark.callFunction(devId, 'led', 'on', callback);
      
      
     // Session.set('counter', Session.get('counter') - 2);
    }
  });
  
  var callback = function(err, data) {
    if (err) {
      console.log('An error occurred while getting core attrs:', err);
    } else {
      console.log('Core attr retrieved successfully:', data);
    }
  };
  




