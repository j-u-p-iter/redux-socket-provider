const errorMessage = 'Error message';

const createSocketServer = (io) => {
  io.on('connection', socket => {
    // sends direct messages to test useListen hook
    setTimeout(() => {
      socket.emit('initialMessage', { data: { id: 1 } });
    }, 2000);

    setTimeout(() => {
      socket.emit('initialMessageWithError', { error: errorMessage });
    }, 2000);

    // listen events from client 
    // and send data back to test useGetData hook
    socket.on('getData', fn => {
      const someData = { id: 1 };

      setTimeout(() => {
        fn({ data: someData });
      }, 2000);
    });

    // listen events from client 
    // and send error back to test useGetData hook
    socket.on('getDataWithError', fn => {
      setTimeout(() => {
        fn({ error: errorMessage });
      }, 2000);
    });

    // listen events from client, 
    // process data, that come from client, 
    // and send data as response to test useSendData hook
    socket.on('updateItem', (dataToUpdate, fn) => {
      const { data: { counter } } = dataToUpdate;
      
      setTimeout(() => {
        fn({ data: { result: counter + 1 } });
      }, 2000);
    });

    // listen events from client, 
    // process data, that come from client, 
    // and send error as response to test useSendData hook
    socket.on('updateItemWithError', (_, fn) => {
      setTimeout(() => {
        fn({ error: errorMessage });
      }, 2000);
    });
  });
}

module.exports = createSocketServer;
