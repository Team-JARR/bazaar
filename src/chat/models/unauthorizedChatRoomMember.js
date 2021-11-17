const ChatRoomMember = require('./chatRoomMember');

class UnauthorizedChatRoomMember extends ChatRoomMember {
  constructor(username, role, listingId) {
    super();

    this.username = username;
    this.role = role;
    this.listingId = listingId;
  }
};

module.exports = UnauthorizedChatRoomMember;
