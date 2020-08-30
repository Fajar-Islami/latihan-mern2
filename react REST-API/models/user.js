const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  alamat: {
    type: String,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
