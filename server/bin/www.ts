import 'dotenv/config';
import http from 'http';
import app from 'app';

const { PORT } = process.env;

app.set('port', parseInt(PORT, 10));

const server = http.createServer(app);

const onListening = () => {
  console.dir(server.address());
};

server.listen(app.get('port'));
server.on('listening', onListening);
