const path = require("path");
module.exports = {
  //...
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components/"),
      images: path.resolve(__dirname, "./src/images/"),
      pages: path.resolve(__dirname, "./src/pages/"),
      SignUp: path.resolve(__dirname, "./src/pages/SignUp/"),
    },
    extensions: [".js", ".jsx"],
  },
};
