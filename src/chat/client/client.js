const PORT = process.env.CHATPORT || 3030;
const socket = require("socket.io-client")(`http://localhost:${PORT}`);
const repl = require("repl");
const figlet = require("figlet");
const chalk = require("chalk");

const username = process.argv[2] || "happy";
const role = process.argv[3] || "seller";
const listingId = process.argv[4] || "1";

socket.on("connect", () => {
  console.log(chalk.green("Connected."));
  socket.emit("auth", { username, role, listingId });

  figlet(
    "begin chat!",
    {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 100,
      whitespaceBreak: true,
    },
    (err, data) => {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
      }
      console.log(chalk.blue(data));
    }
  );
});

socket.on("message", (data) => {
  const message = data.message;
  const user = data.username;
  console.log(chalk.blue(`${user}: ${message.split("\n")[0]}`));
});

socket.on("disconnect", () => {
  socket.emit("disconnect", { username });
});

repl.start({
  prompt: "",
  eval: (message) => {
    socket.send({ username, message });
  },
});
