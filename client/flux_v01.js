// counter starts at 0
Session.setDefault('toggle1', false);
Session.setDefault('flux_1', false);
Session.setDefault('flux_2', false);
Session.setDefault('flux_3', false);
Session.setDefault('flux_4', false);
Session.setDefault('flux_5', false);
Session.setDefault('flux_6', false);
Session.setDefault('flux_7', false);
Session.setDefault('flux_8', false);
Session.setDefault('flux_9', false);
Session.setDefault('flux_10', false);
Session.setDefault('flux_11', false);
Session.setDefault('flux_12', false);
Session.setDefault('flux_13', false);
Session.setDefault('flux_14', false);

var devId = '260039000347343233323032';

Template.flux.rendered = function() {
  // init.
  spark.login({
    accessToken: 'fad8cca1f42bd758b7c5684e665123d41c38b632'
  });

}


var callback = function(err, data) {
  if (err) {
    console.log('An error occurred while getting core attrs:', err);
  }
  else {
    console.log('Core attr retrieved successfully:', data);

  }
};

Template.flux.events({

  "click .flux_5": function(evt) {
    // Set the checked property to the opposite of its current value
    console.log("flux 5 clicked custom event listener");

    //spark.callFunction(devId, 'led', Session.get('toggle1')?'off':'on', callback);
    //Session.set('toggle1', ! Session.get('toggle1'));
  },

  "click .flux_1": function(evt) {
    // Set the checked property to the opposite of its current value
    console.log("flux 1 with id: " + evt.currentTarget.id);
    var s = Snap(".flux_1");
    var flux_1 = Session.get("flux_1");

    // return_value
    if (flux_1 == false) {
      Session.set("flux_1", true);
      spark.callFunction(devId, 'led', 'flux_1_on', callback);
      s.attr({
        stroke: "#000",
        strokeWidth: 5
      });
    }
    else {
      Session.set("flux_1", false);
      s.attr({
        fill: "#fff",
        stroke: "#fff"
      });
      spark.callFunction(devId, 'led', 'flux_1_off', callback);

      //spark.callFunction(devId, 'led', Session.get('toggle1')?'off':'on', callback);
      //Session.set('toggle1', ! Session.get('toggle1'));
    } //end else
  },

  "click .flux_2": function(evt) {
    // Set the checked property to the opposite of its current value
    console.log("flux 2 clicked custom event listener");
    // we can check the evt.currentTarget ...
    // derive the class and base on that get the element with snap
    // and set the stroke with a function a lot less code
    var s = Snap(".flux_2");
    var flux_1 = Session.get("flux_2");
    if (flux_1 == false) {
      Session.set("flux_2", true);

      s.attr({
        stroke: "#000",
        strokeWidth: 5
      });
    }
    else {
      Session.set("flux_2", false);
      s.attr({
        fill: "#fff",
        stroke: "#fff"
      });
    }

    //spark.callFunction(devId, 'led', Session.get('toggle1')?'off':'on', callback);
    //Session.set('toggle1', ! Session.get('toggle1'));
  },

  "click .flux_3": function(evt) {
    // Set the checked property to the opposite of its current value
    console.log("flux 3 clicked custom event listener");
    // we can check the evt.currentTarget ...
    // derive the class and base on that get the element with snap
    // and set the stroke with a function a lot less code
    var s = Snap(".flux_3");
    var flux_1 = Session.get("flux_3");
    if (flux_1 == false) {
      Session.set("flux_3", true);

      s.attr({
        stroke: "#000",
        strokeWidth: 5
      });
    }
    else {
      Session.set("flux_3", false);
      s.attr({
        fill: "#fff",
        stroke: "#fff"
      });
    }

    //spark.callFunction(devId, 'led', Session.get('toggle1')?'off':'on', callback);
    //Session.set('toggle1', ! Session.get('toggle1'));
  },

  "click .flux_4": function(evt) {
    // Set the checked property to the opposite of its current value
    console.log("flux 4 clicked custom event listener");
    // we can check the evt.currentTarget ...
    // derive the class and base on that get the element with snap
    // and set the stroke with a function a lot less code
    var s = Snap(".flux_4");
    var flux_1 = Session.get("flux_4");
    if (flux_1 == false) {
      Session.set("flux_4", true);

      s.attr({
        stroke: "#000",
        strokeWidth: 5
      });
    }
    else {
      Session.set("flux_4", false);
      s.attr({
        fill: "#fff",
        stroke: "#fff"
      });
    }

    //spark.callFunction(devId, 'led', Session.get('toggle1')?'off':'on', callback);
    //Session.set('toggle1', ! Session.get('toggle1'));
  },

  "click .flux_5": function(evt) {
    // Set the checked property to the opposite of its current value
    console.log("flux 5 clicked custom event listener");

    // we can check the evt.currentTarget ...
    // derive the class and base on that get the element with snap
    // and set the stroke with a function a lot less code
    var s = Snap(".flux_5");
    var flux_1 = Session.get("flux_5");
    if (flux_1 == false) {
      Session.set("flux_5", true);

      s.attr({
        stroke: "#000",
        strokeWidth: 5
      });

    }
    else {
      Session.set("flux_5", false);
      s.attr({
        fill: "#fff",
        stroke: "#fff"
      });
    }

    //spark.callFunction(devId, 'led', Session.get('toggle1')?'off':'on', callback);
    //Session.set('toggle1', ! Session.get('toggle1'));
  },

  "click .flux_6": function(evt) {
    // Set the checked property to the opposite of its current value
    console.log("flux 6 clicked custom event listener");

    // we can check the evt.currentTarget ...
    // derive the class and base on that get the element with snap
    // and set the stroke with a function a lot less code
    var s = Snap(".flux_6");
    var flux_1 = Session.get("flux_6");
    if (flux_1 == false) {
      Session.set("flux_6", true);

      s.attr({
        stroke: "#000",
        strokeWidth: 5
      });
    }
    else {
      Session.set("flux_6", false);
      s.attr({
        fill: "#fff",
        stroke: "#fff"
      });
    }

    //spark.callFunction(devId, 'led', Session.get('toggle1')?'off':'on', callback);
    //Session.set('toggle1', ! Session.get('toggle1'));
  },

  "click": function(evt) {
    // Set the checked property to the opposite of its current value
    console.log("flug: " + evt.currentTarget.id + " Clicked!");

    switch (evt.currentTarget.id) {
      case "XMLID_24_":
        console.log("Flux 1 clicked");
        break;
      case "XMLID_23_":
        console.log("Flux 2 clicked");
        break;
      case "XMLID_22_":
        console.log("Flux 3 clicked");
        break;
      case "XMLID_21_":
        console.log("Flux 4 clicked");
        break;
      case "flux_el_5":
        console.log("Flux 5 clicked");
        break;
      case "XMLID_27_":
        console.log("Flux 6 clicked");
        break;
      case "XMLID_26_":
        console.log("Flux 7 clicked");
        break;
      case "XMLID_25_":
        console.log("Flux 8 clicked");
        break;
      case "XMLID_4_":
        console.log("Flux 9 clicked");
        break;
      case "XMLID_1_":
        console.log("Flux 10 clicked");
        break;
      case "XMLID_8_":
        console.log("Flux 11 clicked");
        break;
      case "XMLID_7_":
        console.log("Flux 12 clicked");
        break;
      case "XMLID_6_":
        console.log("Flux 13 clicked");
        break;
      case "XMLID_5_":
        console.log("Flux 14 clicked");
        break;
      default:
        console.log("other clicked");
    }
    //console.log("flux cilcked");

    //spark.callFunction(devId, 'led', Session.get('toggle1')?'off':'on', callback);
    //Session.set('toggle1', ! Session.get('toggle1'));
  }
});
