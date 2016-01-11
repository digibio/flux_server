Digi.bio flux server

description:
this software provides a web based control interface to dmf hardware. It provides an API which will allow communication from any means of defining droplet movements, there being manual, AI, or with external design software, to any piece of hardware supporting the API.

being in early development stages, the only supported prototyping interface is a particle photon. This is to be extended to other types of hardware. 

right now, only pinouts are being controlled. This is to be overlayed with a semantic layer representing the network edges between the addressed fluxels, so that droplet algorithms can be run on it. 

This is a meteor project. To run it, install meteor (www.meteor.com) and simply type: `meteor` on the command line. 
Autopublish and insecure are still on, because of early development stage. This means it is not safe in terms of data protection.

Todo for now: 
- create a record-and-play interface for the fluxel algorithm
- create api for the algorithm
  - needed is for single pinout changes to be communicated, including feedback of new state
  - complete algorithms to be transferred including speeds. Feedback about proper receiving. It will start running the algoritm immediately. 
  - a complete pin readout of all pin states
  - Afterwards: the device should send back information to the API when pinouts or other stuff changes - make it responsive
  - Afterwards: preferably setup an open websocket to reduce latency
