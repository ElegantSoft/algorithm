import yargs from "yargs";
const argv = yargs.options({
  a: { type: "array", alias: "numbers", required: true },
  n: { type: "number", alias: "number", required: true }
}).argv;

export default class BinarySearch {
  public BinarySearch(numbers: Array<number | string>, num: number): number {
    let start = 0;
    let end = numbers[numbers.length - 1];
    if (typeof end === "number") {
      let middle = Math.floor((start + end) / 2);
      while (num !== middle && start <= end) {
        if (num > middle) {
          start = middle + 1;
          middle = Math.floor((start + end) / 2);
        } else {
          end = middle - 1;
          middle = Math.floor((start + end) / 2);
        }
      }
      if (middle === num) {
        return middle;
      }
    }
    return -1;
  }

  public main = (): void => {
    const { a, n } = argv;
    console.log(this.BinarySearch(a, n));
  };
}

const search = new BinarySearch();
search.main();
