const { app } = require("./config/index");
const PORT = 8020;

app.listen(PORT, function () {
  console.log("Listenr port:", PORT);
});
