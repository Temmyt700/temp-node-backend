// its typical to name the event emitter as EventEmitter

const EvenEmitter = require('events');
const customEmitter = new EvenEmitter();

// on and emit methods
//.on is used to listen for an event or specific event
customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id:${id}`);
});
//we can have as many .on function we want to listen to at the same event
    // we can have multiple listeners for the same event
customEmitter.on('response', () => {
    console.log(`some other logic here`);
});

//.emit is used to emit an event
// note  that whatever strings you pass in the emit method should be the same as the one you pass in the on method. in this case the string is 'response'
customEmitter.emit('response', 'john', 34);
// keep track of the order of the events



//NOTE that the order should be the same .on always comes before .emit