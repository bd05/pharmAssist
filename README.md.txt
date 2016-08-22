#pharmAssist - IoT automated pill dispenser

Web client for logging patient and prescription information. "Refill" button on prescription page for each patient which activates the 
automated pill dispenser, which will continue to dispense pills until the specified number of pills has been reaches.

Pill counting is through a break beam IR emitter/detector, which is placed at the mouth of the dispenser, where the pills tumble out.
Pill dispenser body was a modification of this design:
http://www.thingiverse.com/thing:1011711

Web client uses Node.js, Express, AngularJS, and UI Router.

IoT platform was Particle's photon:
https://store.particle.io/

Used the Particle Web IDE to flash code to photon. 