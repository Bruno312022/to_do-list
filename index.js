const express = require("express");
const sequelize = require("./Database/db");
const port = 3000;

const app = express();
app.use(express.json());

app.use("/cards", require("./Routes/cardRoutes"));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
    });
});
