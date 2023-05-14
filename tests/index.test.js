const { RuleTester } = require("eslint");
const rule = require("../lib/rules/no-expired-todo-comments");
const { toYYYYMMDD } = require("../utils/date");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});

const now = new Date();

ruleTester.run("no-expired-todo-comments", rule, {
  valid: [
    // valid cases without TODO
    "console.log('Hello world!');",
    "function sum(a, b) { return a + b; }",
    "// TODO",
    "// TODO:",
    "// TODO: ",
    "// TODO: implement this",
    `// TODO: ${toYYYYMMDD(new Date(now.getFullYear() + 1, 0, 1))}`,
  ],
  invalid: [
    {
      code: `// TODO: ${toYYYYMMDD(new Date(now.getFullYear() - 1, 0, 1))}`,
      errors: [
        {
          message: `TODO comment has expired date. TODO: ${toYYYYMMDD(new Date(now.getFullYear() - 1, 0, 1))} Today: ${toYYYYMMDD(now)}`
        },
      ],
    },
  ],
});
