import { Book } from "../model";
import { convertModelToView } from "../transformer";

export async function getBooks() {
  const books = await Book.find();
  const data = books.map(convertModelToView);
  return data;
}
