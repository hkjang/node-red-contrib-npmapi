const NpmApi = require("npm-api");
const npm = new NpmApi();
module.exports = function (RED) {
    function FunctionNode(n) {
        RED.nodes.createNode(this, n);
        var node = this;
        this.name = n.name;
        for (var key in n) {
            node[key] = n[key] || "";
        }
        this.on('input', function (msg) {
            for (var i in msg) {
                if (i !== 'req' | i !== 'res' | i !== 'payload' | i !== 'send' | i !== '_msgid') {
                    node[i] = node[i] || msg[i];
                }
            }
            const api = npm[node.api](node.mname);
            if(node.param){
                api[node.func](node.param).then(function (results) {
                    msg.payload = results;
                    node.send(msg);
                }, function (err) {
                    msg.payload = err;
                    node.send(msg);
                });
            }else{
                api[node.func]().then(function (results) {
                    msg.payload = results;
                    node.send(msg);
                }, function (err) {
                    msg.payload = err;
                    node.send(msg);
                });
            }
        });
    }

    RED.nodes.registerType("npmapi", FunctionNode);
};
