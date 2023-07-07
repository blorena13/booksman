import { CreateBook } from "../protocols/book";
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
  const createdBook = await prisma.books.create({
    data: {...book, purchaseDate: new Date(book.purchaseDate)}
  })

  return createdBook;
}


export async function reviewBook(bookReview: CreateReview) {
  const updatedBook = await prisma.books.update({
    data: 
      {
        review: bookReview.review,
        grade: bookReview.grade,
        read: true
      },
      where:{
        id: bookReview.bookId
      }
  }) 
  return updatedBook;
}