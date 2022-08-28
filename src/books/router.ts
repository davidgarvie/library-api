import { Segments, celebrate } from "celebrate";
import { createBook, getBooks } from "./controllers";
import { Router } from "express";
import { createBookValidator } from "./validators";

export const bookRouter = Router();

bookRouter.post(
  "/books",
  celebrate({
    [Segments.BODY]: createBookValidator,
  }),
  async (req, res) => {
    const data = await createBook(req.body);
    res.status(201).json(data);
  }
);

bookRouter.get("/books", async (req, res) => {
  const data = await getBooks();
  res.json({ books: data });
});
