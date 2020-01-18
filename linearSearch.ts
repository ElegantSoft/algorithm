import yargs from "yargs";
const argv = yargs.options({
  n: { type: "array", alias: "names" },
  u: { type: "string", alias: "user" }
}).argv;

export default class LinearSearch {
  public main = (): void => {
    const { n, u } = argv;
    if (n && u) {
      n.forEach((user, index) => {
        if (user === u) console.log(index);
      });
    }

    console.log(argv.b);
  };
}

const search = new LinearSearch();
search.main();
