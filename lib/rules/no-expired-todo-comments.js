const { toYYYYMMDD } = require("../../utils/date");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Prevent TODO comments with expired dates.",
      category: "Possible Errors",
      recommended: true,
    },
  },
  create: function (context) {
    return {
      Program: function (node) {
        const now = new Date();
        const comments = context.getSourceCode().getAllComments();
        comments.forEach((comment) => {
          const todo = comment.value.match(/TODO: (\d{4}-\d{2}-\d{2})/);
          if (todo) {
            const date = new Date(todo[1]);
            if (date < now) {
              context.report({
                node: comment,
                message: [
                  "TODO comment has expired date.",
                  `TODO: ${todo[1]}`,
                  `Today: ${toYYYYMMDD(now)}`
                ].join(" "),
              });
            }
          }
        });
      },
    };
  },
};
