const { ROLE } = require('./chatRoom');
const { ChatRoomMember } = require('./chatRoomMember');

module.exports = class Buyer extends ChatRoomMember {
  constructor(user, listingId) {
    super();

    this.username = user.username;
    this.role = ROLE.BUYER;
    this.token = user.token;
    this.listingId = listingId;
  }
};
