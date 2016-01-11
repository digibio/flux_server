Template.fluxelmap.rendered = function() {
  if(Session.get('accessToken')) {
      spark.login({
          accessToken: Session.get('accessToken')
      });
  }

  var s = Snap('.fluxelmap');
  Snap.load("../flux.svg", function(fluxelmap) {
      s.append(fluxelmap);
  });

}

var fluxelclick = function(evt) {
    //TODO: update this function to represent the actual state of the fluxel and be responsive
    var flux_id = evt.currentTarget.id;
    var s = Snap("#" + flux_id);
    var flux_state = Session.get(flux_id);
    cb = function(err, data) {
        console.log("err: " + JSON.stringify(err));
        console.log("data: " + JSON.stringify(data));
        if(err){
            //TODO: also catch http errors
    //        return
        };
        Session.set(flux_id, !flux_state);
        evt.currentTarget.classList.toggle('off', !flux_state);
    };

    // TODO: create decent api call here. For this, a pinout is needed. 
    // option to do the pinout is simply take the index of the element.
    // a better option is to store in the database a pin list with associated element.id, allowing for common pins
    //
    spark.callFunction(Session.get('devId'), 'led', flux_state? 'flux_1_on':'flux_1_off', cb);
}

Template.fluxelmap.events({
  "click .st0": function(evt) {
    // Set the checked property to the opposite of its current value
    console.log("index: " + $('.fluxelmap .st0').index(evt.currentTarget));
    fluxelclick(evt);
    /*
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
    */
  }
});
