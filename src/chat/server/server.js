'use strict';

const PORT = process.env.CHATPORT || 3030;
const http = require('http').createServer();
const {db, listing, users } = require('../../models/index');
const io = require('socket.io')(http, {pingInterval: 60000});

http.listen(
  PORT,
  () => console.log(`Server listening on PORT: ${PORT}`));

io.on('connection', (socket) => {
  console.log('A client has connected. Checking auth');

  /*
    Scenarios

    What if 2 sellers connect? Which listing are we talking about?
   */

  // expecting client to send an auth message
  // a username of 'guest' means they haven't specified account name
  socket.on('auth', ({username, role, listingId}) => {
    console.log(`Attempting to auth user: ${username} with role: ${role} for listingId: ${listingId}`);
    if (userIsAuthorized(username)) {
      // auth'd
      console.log(`${username} is authorized and joined the chat.`);
      if (isValidListing(username, listingId)) {
        // listing is good, auth'd and seller confirmed
        // todo: let's put buyer and seller in the same "room" where the namespace of the room is the listingId
      } else {
        // something is wrong with: listingId, seller might not own listing, username might not be valid account
      }
    } else {
      // unauth'd
      // disconnect socket?
      console.log(`${username} is unauthorized anc disconnect from the chat.`);
    }
  });

  socket.on('message', (payload) => {
    console.log(payload);
    socket.broadcast.emit('message', payload);
  });

  socket.on('disconnect', (payload) => {
    console.log(`${payload} is offline`);
  });
});

async function userIsAuthorized({username}) {
  // todo: check db for user and return true
  // use the username in a db.select query
  // if exists, return true
  // else return false
  data = await users.findOne({ where: { username} } )
  if(data){
    return true;
  }else{
    return false;
  }
  // return true;
}

async function isValidListing({username, listingId}) {
  // todo: check the listingId is valid
  // use the username owns that listingId in a db.select query
  // if exists, return true , maybe count > 0
  // else return false
  let createdBy = username;
  let id = listingId;
  let data = await listing.findOne({ where: { id, createdBy} }); 
  if(data){
    return true;
  }else{
    return false;
  }

  // return true;
}
