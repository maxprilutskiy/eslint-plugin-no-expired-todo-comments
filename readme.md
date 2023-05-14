# eslint-plugin-no-expired-todo-comments

🎉 An ESLint plugin that prevents TODO comments with expired dates! 🎉

## Overview

The eslint-plugin-no-expired-todo-comments is an ESLint plugin that provides a new rule for detecting TODO comments with expired dates. This plugin ensures that you don't have any outdated TODO comments in your codebase, helping you keep your code clean and organized.

Inspired by [@parker_codes](https://twitter.com/parker_codes)'s [parker-codes/todo-by](https://github.com/parker-codes/todo_by), check it out!

## Installation

You can install the eslint-plugin-no-expired-todo-comments plugin using npm:

```sh
npm install eslint-plugin-no-expired-todo-comments --save-dev
# or
yarn add eslint-plugin-no-expired-todo-comments --dev
# or
pnpm add eslint-plugin-no-expired-todo-comments --save-dev
```

## Usage

Once installed, you can use the `no-expired-todo-comments` rule in your ESLint configuration:

```javascript
// .eslintrc.js
module.exports = {
  plugins: ["no-expired-todo-comments"],
  rules: {
    "no-expired-todo-comments/no-expired-todo-comments": "error",
  },
};
```

Now, whenever you have a TODO comment with an expired date in your codebase, ESLint will raise an error:

```javascript
// This will raise an error
// TODO: 2020-01-01: This is an expired TODO comment
```

As simple as that!

## Contributing

Contributions from the community are very much welcome! If you encounter any bugs or issues, please open an issue on the project's GitHub page. If you'd like to contribute code, please fork the project and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
