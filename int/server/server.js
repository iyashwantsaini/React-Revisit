const mongoose = require("mongoose");
const Document = require("./schema.js");

mongoose.connect(
  "mongodb+srv:............",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const express = require("express");
var { ExpressPeerServer } = require("peer");
const app = express();
const server = require("http").Server(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

server.listen(3001);

const peerServer = ExpressPeerServer(server, {
  path: "/",
});

app.use("/peerjs", peerServer);

const defaultValue = "";

const users = {};
const socketToRoom = {};

io.on("connection", (socket) => {
  socket.on("get-document", async (documentId) => {
    const document = await findOrCreateDocument(documentId);
    socket.join(documentId);
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });

  // for videocalls

  socket.on("join room", (documentID) => {
    if (users[documentID]) {
      const length = users[documentID].length;
      if (length === 4) {
        socket.emit("room full");
        return;
      }
      users[documentID].push(socket.id);
    } else {
      users[documentID] = [socket.id];
    }
    socketToRoom[socket.id] = documentID;
    const usersInThisRoom = users[documentID].filter((id) => id !== socket.id);

    socket.emit("all users", usersInThisRoom);
  });

  socket.on("sending signal", (payload) => {
    io.to(payload.userToSignal).emit("user joined", {
      signal: payload.signal,
      callerID: payload.callerID,
    });
  });

  socket.on("returning signal", (payload) => {
    io.to(payload.callerID).emit("receiving returned signal", {
      signal: payload.signal,
      id: socket.id,
    });
  });

  socket.on("disconnect", (payload) => {
    console.log(payload);
    // const documentID = socketToRoom[socket.id];
    // let room = users[documentID];
    // if (room) {
    //   room = room.filter((id) => id !== socket.id);
    //   users[documentID] = room;
    // }
    // socket.to(documentID).broadcast.emit("user-disconnected", users[documentID]);
  });
});

async function findOrCreateDocument(id) {
  if (id == null) return;
  const document = await Document.findById(id);
  if (document) return document;
  return await Document.create({ _id: id, data: defaultValue });
}
