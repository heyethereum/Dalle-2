import "dotenv/config";
import { Dalle } from "dalle-node";

const dalle = new Dalle(process.env.DALLE_BEARER); // Bearer Token
const prompt = `a painting of Singapore's Orchard Road`;

(async () => {
  const result = await dalle.generate(prompt);

  console.log(result.data.map((path) => path.generation));
})();
