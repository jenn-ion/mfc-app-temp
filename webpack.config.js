const path = require("path")

module.exports = {
    entry: {
        main: "./src/main.ts",
    },
    output: {
        filename: "[name].js",
        path: path.resolve("./dist"),
    },
    //mode: "development",
}