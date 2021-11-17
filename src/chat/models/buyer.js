const ROLE = require('./chatRoom').ROLE;
const ChatRoomMember = require('./chatRoomMember');

class Buyer extends ChatRoomMember {
  constructor(user, listingId) {
    super();

    this.username = user.username;
    this.role = ROLE.BUYER;
    this.token = user.token;
    this.listingId = listingId;
  }
};

module.exports = Buyer;
