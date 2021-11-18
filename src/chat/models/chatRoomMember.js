class ROLE {
  static BUYER = 'buyer';
  static SELLER = 'seller';
}

class ChatRoomMember {
  username;
  role;
  token;
  listingId;

  static isBuyer(listing) {
    return listing;
  }

  static isSeller(username, listing) {
    return listing && listing.createdBy === username;
  }

  static async factory(username, role, listingId, listings, users) {
    console.log(username, role, listingId, listings, users);

    const listing = await listings
      .findOne({where: {id: listingId}});

    const user = await users
      .findOne({where: {username}});

    console.log(listing);
    console.log(user);

    if (ChatRoomMember.isSeller(username, listing)) {
      return new Seller(user, listingId);
    }

    if (ChatRoomMember.isBuyer(listing)) {
      return new Buyer(user, listingId);
    }

    return new UnauthorizedChatRoomMember(username, role, listingId);
  }
}

class Buyer extends ChatRoomMember {
  constructor(user, listingId) {
    super();

    this.username = user.username;
    this.role = ROLE.BUYER;
    this.token = user.token;
    this.listingId = listingId;
  }
}

class Seller extends ChatRoomMember {
  constructor(user, listingId) {
    super();

    this.username = user.username;
    this.role = ROLE.SELLER;
    this.token = user.token;
    this.listingId = listingId;
  }
}

class UnauthorizedChatRoomMember extends ChatRoomMember {
  constructor(username, role, listingId) {
    super();

    this.username = username;
    this.role = role;
    this.listingId = listingId;
  }
}

module.exports = {
  ChatRoomMember, ROLE
};
