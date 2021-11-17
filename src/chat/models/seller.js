const { ROLE } = require('./chatRoom');
const { ChatRoomMember } = require('./chatRoomMember');

module.exports = class Seller extends ChatRoomMember {
  constructor(user, listingId) {
    super();

    this.username = user.username;
    this.role = ROLE.SELLER;
    this.token = user.token;
    this.listingId = listingId;
  }
};
