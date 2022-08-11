const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
    socket.on("msg", (data) => {
        io.emit("showmsg", data);
    });
    socket.on("disconnect", () => {
        console.log(`${socket.id} se desconectou`)
    });
});

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("index");
});

http.listen(3000, () => {
    console.log("App rodando");
});