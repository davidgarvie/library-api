import { Book } from "../src/books/model";
import { app } from "../src/app";
import request from "supertest";

describe("/books", () => {
  beforeAll(async () => {
    const book = new Book({
      author: "JK Rowling",
      title: "Harry Potter and the Sorcerer’s Stone",
    });
    await book.save();
  });

  it("gets a list of books", async () => {
    const res = await request(app)
      .get("/books")
      .expect("Content-Type", /application\/json/)
      .expect(200);

    const [book] = res.body.books;
    expect(book).toEqual(
      expect.objectContaining({
        author: "JK Rowling",
        title: "Harry Potter and the Sorcerer’s Stone",
      })
    );
  });

  it("creates a book", async () => {
    const res = await request(app)
      .post("/books")
      .send({
        author: "JK Rowling",
        title: "Harry Potter and the Chamber of Secrets",
      })
      .expect("Content-Type", /application\/json/)
      .expect(201);

    expect(res.body).toEqual(
      expect.objectContaining({
        author: "JK Rowling",
        title: "Harry Potter and the Chamber of Secrets",
      })
    );
  });
});
