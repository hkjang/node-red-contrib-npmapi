node-red-contrib-npmapi
================

Node-RED node for npmapi


## Install

To install the stable version use the `Menu - Manage palette - Install`
option and search for node-red-contrib-npmapi, or run the following
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-npmapi

## sample params
```javascript
msg = {};
msg.api = 'repo';
msg.mname = 'node-red-contrib-npmapi';
msg.func = 'version';
// msg.param = '1.0.0'; if msg.func is version
msg.func = 'dependencies';
msg.func = 'devDependencies';
msg.func = 'prop';

msg.api = 'maintainer';
msg.mname = 'gagagiga';
msg.func = 'repos';
return msg;
```

## Sample flow

```json
[{"id":"ac0b241c.b1cb18","type":"inject","z":"66670ffc.769f2","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":150,"y":480,"wires":[["9b28379b.6bf0e8"]]},{"id":"66b938ac.fe5618","type":"npmapi","z":"66670ffc.769f2","name":"","api":"","mname":"","func":"","x":520,"y":480,"wires":[["bb2c66da.e15a88"]]},{"id":"9b28379b.6bf0e8","type":"function","z":"66670ffc.769f2","name":"","func":"msg = {};\nmsg.api = 'repo';\nmsg.mname = 'node-red-contrib-npmapi';\nmsg.func = 'version';\n// msg.param = '1.0.0'; if msg.func is version\nmsg.func = 'dependencies';\nmsg.func = 'devDependencies';\nmsg.func = 'prop';\n\n\nmsg.api = 'maintainer';\nmsg.mname = 'gagagiga';\nmsg.func = 'repos';\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":340,"y":480,"wires":[["66b938ac.fe5618"]]},{"id":"bb2c66da.e15a88","type":"debug","z":"66670ffc.769f2","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","targetType":"full","statusVal":"","statusType":"auto","x":690,"y":480,"wires":[]}]
```
