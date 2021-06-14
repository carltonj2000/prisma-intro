# Prisma Introduction

Completed to 1hr9min min of video below.

The code in this repository is based on the
[A Practical Introduction to Prisma](https://youtu.be/tdiB-DjAnUk)
video, uses the associated
[workshop notes and quizzes](https://www.notion.so/A-Practical-Introduction-to-Prisma-2021-ccf00a066ef4432caeb03da179e38302).
and has a
[Starter code git repo](https://github.com/nikolasburk/prisma-workshop/tree/rest-api)

## Lesson 1: Setup, data modeling & migrations

```bash
npm init -y
npm i -D prisma ts-node typescript
npm i @prisma/client
vi .gitignore
vi script.ts
vi ./prisma/schema.prisma # create user model
npx prisma migrate dev --name init
npx prisma studio # add user data
vi ./prisma/schema.prisma # create post model
npx prisma migrate dev --name add-post
# below creates but does not run the migration
npx prisma migrate dev --create-only
```

User data below and Post data in the script.

- 1, Tina, tina@a.b
- 2, Carlton, carlton@a.b
- 3, Cheryl, chery@a.b

## Lesson 2: Explore Prisma Client

[Starter code git repo](https://github.com/nikolasburk/prisma-workshop/tree/rest-api)

```bash
# start same as lesson one then the following
npx prisma db seed --preview-feature
```

## Lesson 3: REST API

## Lesson 4: GraphQL API

```graphql
# graphql queries
{
  allUsers {
    id
    name
    email
    posts {
      id
      title
    }
  }
}
{
  postById(id: 1) {
    id
    title
    content
    published
    viewCount
    author {
      id
      name
      email
    }
  }
}
{
  feed {
    id
    title
    content
    published
    viewCount
    author {
      id
      name
      email
    }
  }
}
{
  draftsByUser(id: 3) {
    id
    title
    content
    published
    viewCount
    author {
      id
      name
      email
    }
  }
}
mutation {
  signupUser(name: "Nikolas", email: "burk@prisma.io") {
    id
    posts {
      id
    }
  }
}
mutation {
  createDraft(title: "Hello World", authorEmail: "burk@prisma.io") {
    id
    published
    viewCount
    author {
      id
      email
      name
    }
  }
}
mutation {
  incrementPostViewCount(id: 1) {
    id
    viewCount
  }
}
mutation {
  deletePost(id: 1) {
    id
  }
}
```
