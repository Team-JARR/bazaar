const PORT = process.env.CHATPORT || 3030;
const figlet = require("figlet");
const chalk = require("chalk");
const http = require("http").createServer();
const io = require("socket.io")(http, { pingInterval: 60000 });

const { db, listing, users } = require("../../data/index");
const ChatRoom = require("../models/chatRoom");
const { ROLE } = require("../models/chatRoomMember");

figlet(
  "Bazaar",
  {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 100,
    whitespaceBreak: true,
  },
  (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(chalk.magenta(data));
  }
);

http.listen(PORT, () =>
  console.log(chalk.green(`Server listening on PORT: ${PORT}`))
);

io.on("connection", (socket) => {
  console.log("A client has connected. Checking auth");

  socket.on("auth", ({ username, role, listingId }) => {
    console.log(
      `Attempting to auth user: ${username} with role: ${role} for listingId: ${listingId}`
    );

    const room = new ChatRoom(username, role, listingId, listing, users);
    /*
    Let's do some research, figure out socket.io rooms

    // socket.room = room.namespace

     */

    /*
    Then, let's figure out how to boot connections for whoever's not in these 2 roles

    // room.chatMembers.filter(m => m.ROLE !== ROLE.BUYER || m.ROLE !== ROLE.SELLER); // something like this

    // boot those guys
     */
  });

  socket.on("message", (payload) => {
    console.log(payload);
    socket.broadcast.emit("message", payload);
  });

  socket.on("disconnect", (payload) => {
    console.log(`${payload} is offline`);
  });
});

async function isAuthorizedUser({ username }) {
  const data = await users.findOne({ where: { username } });

  if (data) {
    return true;
  }

  return false;
}

async function isValidListing({ username, listingId }) {
  const data = await listing.findOne({
    where: { id: { listingId }, createdBy: { username } },
  });

  if (data) {
    return true;
  }
  return false;
}
