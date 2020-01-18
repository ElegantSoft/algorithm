const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Recursive {
  public factorial(num: number): number {
    if (num === 1) return 1;
    return num * this.factorial(num - 1);
  }

  private async getInput(): Promise<any> {}

  public main = (): void => {
    rl.question("Put a number: ", answer => {
      console.log(this.factorial(answer));
      rl.close();
    });
  };
}

const RC = new Recursive();
RC.main();
