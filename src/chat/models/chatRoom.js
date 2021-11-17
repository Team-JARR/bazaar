const {ChatRoomMember, ROLE} = require('./chatRoomMember');

class ChatRoom {
  /**
   * Members of the chat room.
   * @type {Array<ChatRoomMember>}
   */
  chatMembers = [];

  /**
   * The chat room's namespace is the listing id.
   * @type {string}
   */
  namespace;

  /**
   * @param {string} username
   * @param {ROLE} role
   * @param {string} listingId
   * @param listings - The listings sequelize table
   * @param users - The users sequelize table
   */
  constructor(username, role, listingId, listings, users) {
    this.namespace = listingId;

    const chatRoomMember = ChatRoomMember.factory(
      username,
      role,
      listingId,
      listings,
      users);

    console.log(chatRoomMember.ROLE);
    this.chatMembers.push(chatRoomMember);
  }
}

module.exports = ChatRoom;
