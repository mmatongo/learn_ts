const inference = class {
  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  a: string;
  b: number;
  c: boolean;
};

const test = new inference("a", 1, true);
