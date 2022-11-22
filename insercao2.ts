import { Distribuidora } from "./main";
import "./insercao1";

const games = Distribuidora.getInstance();

games.add({ titulo: "Red Dead Redemption 2", console: "PS4", quantidade: 20 });
games.add({ titulo: "Horizon Forbidden West", console: "PS5", quantidade: 40 });
games.add({ titulo: "Far Cry 6", console: "Xbox One", quantidade: 30 });
games.add({ titulo: "Forza Horizon 5", console: "PC", quantidade: 20 });
games.add({ titulo: "Bloodborne", console: "PS4", quantidade: 30 });
games.show();
