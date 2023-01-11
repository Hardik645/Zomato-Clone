"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _foodApi = _interopRequireDefault(require("./api/foodApi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const zomato = (0, _express.default)();
const Port = process.env.PORT;
zomato.use(_express.default.json());
zomato.get("/", (req, res) => {
  try {
    return res.sendStatus(200);
  } catch (error) {
    console.log(error.message);
  }
});
zomato.use("/food", _foodApi.default);
zomato.listen(Port, async () => {
  try {
    console.log("Server is running !!");
    _mongoose.default.set('strictQuery', false);
    await _mongoose.default.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("DB connected !!");
  } catch (error) {
    console.log(error);
  }
});