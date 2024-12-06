import fs from "fs";
import { Server } from "socket.io";

const messagesFilePath = "src/managers/data/chat.json";

// Leer el chat desde chat.JSON
export const readChat = () => {
  if (!fs.existsSync(messagesFilePath)) {
    fs.writeFileSync(messagesFilePath, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(messagesFilePath, "utf-8"));
};

// Guardar los mensajes en chat.JSON
export const saveChat = (messages) => {
  fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2));
};

// Configuración del WebSocket
export const chatSocket = (httpServer) => {
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log(`Nuevo participante conectado con el ID ${socket.id}`);

    const messages = readChat();
    socket.emit("messageLogs", messages);

    socket.on("newUser", (data) => {
      socket.broadcast.emit("newUser", data);
    });

    socket.on("message", (data) => {
      const messages = readChat();
      messages.push(data);
      saveChat(messages);
      io.emit("messageLogs", messages);
    });
  });
};
