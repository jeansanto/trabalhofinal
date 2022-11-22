import { Distribuidora } from "./main";

const games = Distribuidora.getInstance();
games.add({ titulo: "The Last of US Part II", console: "PS4", quantidade: 20 });
games.add({ titulo: "Fifa 23", console: "PS5", quantidade: 40 });
games.add({ titulo: "NBA 2K23", console: "Xbox One", quantidade: 30 });
games.add({ titulo: "Diablo 4", console: "PC", quantidade: 20 });
games.add({ titulo: "God Of War", console: "PS4", quantidade: 30 });
games.show();
console.log("boa noite");
export { Distribuidora };
