const { ChatRoomMember, ROLE } = require("./chatRoomMember");

class ChatRoom {
  chatMembers = [];
  name;

  constructor(username, role, listingId, listings, users) {
    this.name = listingId;
    this.begin(username, role, listingId, listings, users).finally((r) => {
      console.log(`Chatroom ${listingId} is ready`);
      this.chatMembers.push(r);
    });

    console.log(JSON.stringify(this.chatMembers));
  }

  async begin(username, role, listingId, listings, users) {
    return await ChatRoomMember.factory(
      username,
      role,
      listingId,
      listings,
      users
    );
  }
}

module.exports = ChatRoom;
