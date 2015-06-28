function server(io) {
    io.on('connect', function (socket) {
        console.log('connect');
    });
}

module.exports = server;