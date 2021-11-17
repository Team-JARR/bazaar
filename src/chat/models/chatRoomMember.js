export class ChatRoomMember {
  username;
  role;
  token;
  listingId;

  static isBuyer(listing) {
    return listing;
  }

  static isSeller(username, listing) {
    return listing && listing.createdBy.toLowerCase() === username.toLowerCase();
  }

  static async factory(username, role, listingId, listings, users) {
    const listing = await listings.findOne({where: {id: {listingId}}});
    const user = await users.findOne({where: {username}});

    if (ChatRoomMember.isSeller(username, listing)) {
      return new Seller(user, listingId);
    }

    if (ChatRoomMember.isBuyer(listing)) {
      return new Buyer(user, listingId);
    }

    return new UnauthorizedChatRoomMember(username, role, listingId);
  }
}
