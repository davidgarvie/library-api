import { app } from "./app";
import { logger } from "./logger";

const PORT = 8080;

app.listen(PORT, () => {
  logger(`App listening on ${PORT}`);
});
