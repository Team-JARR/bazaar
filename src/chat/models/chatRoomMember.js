const Buyer = require('./buyer')
const Seller = require('./seller')
const UnauthorizedChatRoomMember = require('./unauthorizedChatRoomMember')



class ChatRoomMember {
  username;
  role;
  token;
  listingId;

  constructor(){
  }

  static isBuyer(listing) {
    return listing;
  }

  static isSeller(username, listing) {
    return listing && listing.createdBy === username;
  }

  static factory(username, role, listingId, listings, users) {
    const listing = async() => await listings.findOne({where: {id: {listingId}}});
    const user = async() => await users.findOne({where: {username}});

    if (ChatRoomMember.isSeller(username, listing)) {
      return new Seller(user, listingId);
    }

    if (ChatRoomMember.isBuyer(listing)) {
      return new Buyer(user, listingId);
    }

    return new UnauthorizedChatRoomMember(username, role, listingId);
  }
};

module.exports = ChatRoomMember;
