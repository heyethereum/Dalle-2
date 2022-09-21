import "dotenv/config";
import { Dalle } from "dalle-node";

const dalle = new Dalle(process.env.DALLE_BEARER); // Bearer Token
const prompt = `a painting of singapore's Raffles Place`;

(async () => {
  const result = await dalle.generate(prompt);

  result.data.forEach((path) => {
    console.log(path.generation);
  });
})();
