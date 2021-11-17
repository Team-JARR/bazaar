import { ROLE } from './chatRoom';
import { ChatRoomMember } from './chatRoomMember';

export class Buyer extends ChatRoomMember {
  constructor(user, listingId) {
    super();

    this.username = user.username;
    this.role = ROLE.BUYER;
    this.token = user.token;
    this.listingId = listingId;
  }
}
