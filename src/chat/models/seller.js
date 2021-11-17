import { ROLE } from './chatRoom';
import { ChatRoomMember } from './chatRoomMember';

export class Seller extends ChatRoomMember {
  constructor(user, listingId) {
    super();

    this.username = user.username;
    this.role = ROLE.SELLER;
    this.token = user.token;
    this.listingId = listingId;
  }
}
