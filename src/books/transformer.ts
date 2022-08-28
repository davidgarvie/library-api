import { HydratedDocument } from "mongoose";
import { IBook } from "./model";

export function convertModelToView(book: HydratedDocument<IBook>): IBook {
  const { title, author } = book;
  return {
    author,
    title,
  };
}
