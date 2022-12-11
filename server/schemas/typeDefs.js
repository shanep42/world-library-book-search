// TODO: Define necessary Query and Mutation types.

const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    _id: ID
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String, password: String): Auth
    addUser(username: String, email: String, password: String): Auth
    `
    // TODO: Add saveBook, which accepts a book author's array, description, title, bookId, image, AND link as parameters, returning a User type
    // "Look into creating what's knownn as an input type to handle all these parameters!"
    // PS not sure if this concatenation will break things, so RM this comment when done
    + `
    removeBook(bookId: String): User
}`;

module.exports = typeDefs;