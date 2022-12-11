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

input savedBook {
    description: String
    title: String
    bookId: ID
    image: String
    link: String
    authors: [String]
}

type Query {
    me: User
}

type Mutation {
    login(email: String, password: String): Auth
    addUser(username: String, email: String, password: String): Auth
    saveBook(input: savedBook): User
    removeBook(bookId: String): User
}`;

module.exports = typeDefs;