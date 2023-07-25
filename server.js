

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
   // origin:"http://localhost:3000"
    origin:"https://react-clone-295320.web.app"
app.use(morgan("dev"));

//////////////////////////////* routes *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


app.use("/api/user", require("./routes/auth"));
app.use("/api", require("./routes/video"));
app.use("/api/", require("./routes/user"));

// DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true,  },)

 .then(() => console.log('connected successfully'))
.catch((err => {console.error(err);}));

// PORT
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
