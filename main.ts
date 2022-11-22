interface Games {
  titulo: string;
  console: string;
  quantidade: number;
}

export class Distribuidora {
  private static instance: Distribuidora;
  private games: Games[] = [];
  private constructor() {}

  public static getInstance(): Distribuidora {
    if (!this.instance) {
      this.instance = new Distribuidora();
    }
    return Distribuidora.instance;
  }

  add(games: Games): void {
    this.games.push(games);
  }

  remove(index: number): void {
    this.games.splice(index, 1);
  }

  show(): void {
    for (const game of this.games) {
      console.log(game);
    }
  }
}

const distribuidora: Distribuidora = Distribuidora.getInstance();
