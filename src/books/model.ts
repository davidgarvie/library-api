import { Schema, model } from "mongoose";

export interface IBook {
  title: string;
  author: string;
}

export const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
});

export const Book = model<IBook>("Book", bookSchema);
