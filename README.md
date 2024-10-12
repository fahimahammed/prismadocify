<p align="center">
  <img src="./assets/logo.png" width="200" alt="Logo">
</p>

<div align="center">
  <p>Generate documentation for Prisma schemas.</p>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/prismadocify">
    <img src="https://img.shields.io/npm/v/prismadocify.svg" alt="npm version">
  </a>
  <a href="https://github.com/fahimahammed/prismadocify/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT">
  </a>
  <a href="https://github.com/fahimahammed/prismadocify">
    <img src="https://img.shields.io/github/stars/fahimahammed/prismadocify.svg" alt="GitHub stars">
  </a>
  <a href="https://github.com/fahimahammed/prismadocify/issues">
    <img src="https://img.shields.io/github/issues/fahimahammed/prismadocify.svg" alt="GitHub issues">
  </a>
  <a href="https://github.com/fahimahammed/prismadocify">
    <img src="https://img.shields.io/github/last-commit/fahimahammed/prismadocify.svg" alt="GitHub last commit">
  </a>
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/badge/node-%3E%3D%2016.x-brightgreen.svg" alt="Node version">
  </a>
</div>

#

## Prismadocify

`prismadocify` is a command-line tool that generates markdown documentation for Prisma schemas. It reads your Prisma schema file, parses the models and enums, and outputs a markdown file documenting the schema.

## Hacktoberfest 2024 🎃🍂

**This project is participating in [Hacktoberfest 2024](https://hacktoberfest.com/)!**

We welcome contributions from the open-source community, whether it's bug fixes, feature implementations, or documentation improvements. Every contribution counts toward your Hacktoberfest goal.

### How to Contribute
1. **Fork this repository** and create a new branch.
2. **Find an issue** to work on, or propose a new feature by opening an issue.
3. **Submit your pull request** before October 31st to make it count for Hacktoberfest!

Check out our [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## Features

Here are some of the key features of `prismadocify`:

- **Markdown Documentation Generation**: Automatically generates well-structured markdown documentation for your Prisma schemas.
- **Support for Models and Enums**: Document your Prisma models and enums with table-formatted output.
- **Customizable Paths** (coming soon): Specify custom paths for schema input and output documentation.

## Installation

### Prerequisites

- Node.js (>= 16.x)
- Yarn or npm

### Install via npm

```bash
npm install prismadocify
```

### Install via Yarn

```bash
yarn add prismadocify
```

## Usage

After installing `prismadocify`, you can use it from the command line to generate documentation for your Prisma schema.

### Command

```bash
prismadocify
```

By default, `prismadocify` looks for the Prisma schema file at `./prisma/schema.prisma` and generates the documentation in `./prisma-docs.md`.

### Example

Here is an example of a simple Prisma schema and the generated documentation:

**Prisma Schema (`schema.prisma`)**

```prisma
model User {
  id         String   @id @default(uuid())
  email      String   @unique
  name       String?
  createdAt  DateTime @default(now())
}

enum UserRole {
  ADMIN
  USER
}
```

**Generated Markdown Documentation (`prisma-docs.md`)**

```markdown
# Prisma Schema Documentation

## User

| Field     | Type     | List | Required | Unique |
| --------- | -------- | ---- | -------- | ------ |
| id        | String   | No   | Yes      | Yes    |
| email     | String   | No   | Yes      | Yes    |
| name      | String?  | No   | No       | No     |
| createdAt | DateTime | No   | Yes      | No     |

## Enums

### UserRole

ADMIN, USER
```

---

## Contributing

We welcome contributions of all kinds! To get started, please see the [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to the project.

## License

This project is licensed under the [MIT License](./LICENSE).

## Acknowledgements

Thanks to the [Prisma](https://github.com/prisma/prisma) team for their awesome ORM and inspiration for this tool.

#

