Digi.bio flux server

description:
this software provides a web based control interface to dmf hardware. It provides an API which will allow communication from any means of defining droplet movements, there being manual, AI, or with external design software, to any piece of hardware supporting the API.

being in early development stages, the only supported prototyping interface is a particle photon. This is to be extended to other types of hardware. 

right now, only pinouts are being controlled. This is to be overlayed with a semantic layer representing the network edges between the addressed fluxels, so that droplet algorithms can be run on it. 

This is a meteor project. To run it, install meteor (www.meteor.com) and simply type: `meteor` on the command line. 
because it is for prototyping, all collections are autopublish and insecure are still on.  

Todo for now: 
1.
- create a record-and-play interface for the fluxel algorithm
- create api for the algorithm, which can transfer the algorithm down to the hardware interface and receive information back about the updated state
2.
- create database storing a users' devices - and preferably associated fluxel template - where new devices can be found and connected
