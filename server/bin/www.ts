import http from 'http';
import app from 'app';

app.set('port', 5010);

const server = http.createServer(app);

const onListening = () => {
  console.dir(server.address());
};

server.listen(app.get('port'));
server.on('listening', onListening);
