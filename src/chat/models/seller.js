const ROLE = require('./chatRoom').ROLE;
const ChatRoomMember  = require('./chatRoomMember');

class Seller extends ChatRoomMember {
  constructor(user, listingId) {
    super();

    this.username = user.username;
    this.role = ROLE.SELLER;
    this.token = user.token;
    this.listingId = listingId;
  }
};

module.exports = Seller;
