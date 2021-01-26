import app from "./app";

const PORT = 3103;

const handleListener = () => {
  console.log(`listening on  : http://localhost:${PORT}`);
};

app.listen(PORT, handleListener);
