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
  <!-- <a href="https://www.npmjs.com/package/prismadocify">
    <img src="https://img.shields.io/npm/dm/prismadocify.svg" alt="npm downloads">
  </a> -->
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT">
  </a>
  </a>
  <a href="https://github.com/fahimahammed/prismadocify">
    <img src="https://img.shields.io/github/stars/fahimahammed/prismadocify.svg" alt="GitHub stars">
  </a>
  <a href="https://github.com/fahimahammed/prismadocify/issues">
    <img src="https://img.shields.io/github/issues/fahimahammed/prismadocify.svg" alt="GitHub issues">
  </a>
  <a href="https://github.com/fahimahammed/prismadocify">
    <img src="https://img.shields.io/github/contributors/fahimahammed/prismadocify.svg" alt="GitHub contributors">
  </a>
  <a href="https://github.com/fahimahammed/prismadocify">
    <img src="https://img.shields.io/github/last-commit/fahimahammed/prismadocify.svg" alt="GitHub last commit">
  </a>
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/badge/node-%3E%3D%2016.x-brightgreen.svg" alt="Node version">
  </a>
</div>


#

`prismadocify` is a command-line tool that generates markdown documentation for Prisma schemas. It reads your Prisma schema file, parses the models and enums, and outputs a markdown file documenting the schema.

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

### Guideline

1. Make sure your Prisma schema file is located at `./prisma/schema.prisma`.

2. Run the `prismadocify` command:

   ```bash
   prismadocify
   ```

3. Check the generated `prisma-docs.md` file in the root directory of your project.

### Example

Here is an example of a simple Prisma schema and the generated documentation:

**Prisma Schema (`schema.prisma`)**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id         String   @id @default(uuid())
  email      String   @unique
  name       String?
  role       UserRole @default(USER)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@map("users")
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

| Field     | Type      | List | Required | Unique |
|-----------|-----------|------|----------|--------|
| id        | String    | No   | Yes      | No     |
| email     | String    | No   | Yes      | Yes    |
| name      | String?   | No   | No       | No     |
| role      | UserRole  | No   | Yes      | No     |
| createdAt | DateTime  | No   | Yes      | No     |
| updatedAt | DateTime  | No   | Yes      | No     |

## Enums

### UserRole

---
ADMIN, USER
```

### Options

Currently, `prismadocify` does not support additional options. It follows the convention of looking for the Prisma schema file at the default location (`./prisma/schema.prisma`). Future versions may include support for specifying custom paths and other options.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute.

### Creating Issues

If you encounter a bug or have a feature request, please create an issue on GitHub.

- **Bug Reports**: Include as much detail as possible about the issue, including steps to reproduce, expected behavior, and screenshots if applicable.
- **Feature Requests**: Describe the feature you would like to see, the problem it solves, and any potential implementation details.

To create an issue, go to the [issues page](https://github.com/fahimahammed/prismadocify/issues) and click on the "New issue" button.


## License

This project is licensed under the [MIT License](./LICENSE).


## Acknowledgements

Thanks to the [Prisma](https://github.com/prisma/prisma) team for their awesome ORM and inspiration for this tool.



