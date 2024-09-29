# Contributing to prismadocify

We welcome contributions of all types to `prismadocify`! Whether you're fixing bugs, implementing new features, or improving documentation, we encourage you to get involved.

## How to Contribute

### 1. Fork the Repository

- Fork the repository to your own GitHub account.

### 2. Create a New Branch

- Create a new branch for your work:
  ```bash
  git checkout -b my-new-feature
  ```

### 3. Make Your Changes

- Make your code changes in the new branch.
- Write clear, concise, and meaningful commit messages.
- Ensure that the code follows the project's coding style.

### 4. Run Tests

- Ensure that your changes do not break existing functionality.
- Run any existing tests to verify everything is working.

### 5. Submit a Pull Request

- Submit a pull request (PR) to the main repository:
  - Describe the changes you've made.
  - Reference any issue number if applicable (e.g., "Fixes #42").

## Guidelines

### Reporting Bugs

If you find a bug, please open an issue with:

- A clear title.
- Steps to reproduce the bug.
- Expected behavior vs. actual behavior.
- Screenshots or error messages, if available.

### Requesting Features

If you have an idea for a new feature, open an issue and describe:

- The feature in detail.
- Why it would be useful.
- Any potential implementation details.

### Pull Request Guidelines

- Fork the repo and create a new branch for your changes.
- Commit and push your changes to your fork.
- Submit a pull request from your fork to the main repository.
- Provide a clear explanation of your changes.

---

## Examples of Features to Contribute

Here are some features or enhancements you could work on:

### 1. Custom Paths for Schema and Output Files
Allow users to specify custom paths for both the input schema file and the output markdown documentation file.

- **Issue**: `#12`
- **Expected Feature**: Add a flag to specify the paths in the CLI command.

### 2. Support for Relations in Models
Improve the tool to document relationships between Prisma models, like `@relation` fields.

- **Issue**: `#15`
- **Expected Feature**: Generate documentation that describes model relations, such as one-to-many or many-to-many relationships.

### 3. Add Table of Contents to the Markdown Output
Automatically generate a table of contents at the top of the markdown file, linking to the sections for each model and enum.

- **Issue**: `#18`
- **Expected Feature**: Add a table of contents section that links to different models and enums within the documentation.

### 4. Improve Markdown Formatting Options
Allow users to customize the format of the generated markdown file, including table styles and enum formats.

- **Issue**: `#20`
- **Expected Feature**: Provide additional CLI options to control the markdown formatting.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

### Key Points to Remember

1. **Hacktoberfest Participation**: Make it clear that the project is participating in Hacktoberfest and highlight how contributors can get involved.
2. **Well-Defined Issues**: Provide examples of potential contributions (features, bugs, or enhancements).
3. **Clear Contribution Process**: Detail how contributors should fork, make changes, and submit pull requests.

This setup will help attract contributors and provide them with a smooth experience in your project!