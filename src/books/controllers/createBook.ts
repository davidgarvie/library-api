import { Book, IBook } from "../model";
import { convertModelToView } from "../transformer";

export async function createBook(data: IBook) {
  const { author, title } = data;
  const book = new Book({
    title,
    author,
  });
  await book.save();
  return convertModelToView(book);
}
