import express from "express";
import handlebars from "express-handlebars";
import { chatSocket } from "./managers/chat.manager.js"; // Importar la configuración del socket

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = 8080;

// Configuración de handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

const httpServer = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

// Chat con WebSocket
chatSocket(httpServer);
