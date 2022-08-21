import { MongoMemoryServer } from 'mongodb-memory-server';

(async () => {
  // This will create an new instance of "MongoMemoryServer" and automatically start it
  const mongod = await MongoMemoryServer.create();
  console.log('mongo server created')
  const uri = mongod.getUri();
  console.log('mongo uri', uri);
  // The Server can be stopped again with
  await mongod.stop();
  console.log('mongo server stopped');
})();