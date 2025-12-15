import app from "./app.js";
import connectDB from "./src/config/config.db.js";

const PORT = process.env.PORT;

connectDB ();

app.listen(PORT, () => {
  console.log(`🚀🖥️ Server running on port ${PORT}`);
});
