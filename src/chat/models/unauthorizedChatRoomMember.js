import { ChatRoomMember } from './chatRoomMember';

export class UnauthorizedChatRoomMember extends ChatRoomMember {
  constructor(username, role, listingId) {
    super();

    this.username = username;
    this.role = role;
    this.listingId = listingId;
  }
}
