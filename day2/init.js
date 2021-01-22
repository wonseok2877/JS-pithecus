import app from "./app";

const PORT = 3102;

const handleListening = () => {
  console.log(`listening on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
