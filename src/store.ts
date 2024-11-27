import { manage } from "manate";

class Store {
  counter = 0;
}

const store = manage(new Store());
export default store;
