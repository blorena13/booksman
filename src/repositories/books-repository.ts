import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import { Books } from "@prisma/client";
import { prisma } from "../database";


export async function getBooks() {
  return prisma.books.findMany();
}

export async function getBook(id: number) {
  return prisma.books.findFirst({
    where: { id }
  });
}

export async function createBook(book: CreateBook) {
  const { title, author, publisher, purchaseDate } = book;

  const createdBook = await prisma.books.create({
    data: {
      title,
      author,
      publisher,
      purchaseDate
    }
  })

  return createdBook;
}


export async function reviewBook(id: number ,bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;
  
  const updatedBook = await prisma.books.update({
    where: {
      id: id
    },
    data: {
      grade,
      review,
      read: true
    }
  }) 
  return updatedBook;
}