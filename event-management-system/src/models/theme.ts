export class Theme {
  constructor(public name: string) {}
}

export class Festival extends Theme {
  constructor(name: string, public musicStyle: string) {
    super(name);
  }
}

export class Birthday extends Theme {
  constructor(name: string, public age: number) {
    super(name);
  }
}

export class Concert extends Theme {
  constructor(name: string, public performer: string) {
    super(name);
  }
}