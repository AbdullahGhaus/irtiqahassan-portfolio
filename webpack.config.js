import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: "./src/main.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "shopify-section.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"], // ✅ Add support for CSS files
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/, // ✅ Add this rule for CSS files
                use: ["style-loader", "css-loader", "postcss-loader"], 
            },
        ],
    },
};
