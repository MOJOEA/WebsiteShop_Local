import select from "./select.js";
import insert from "./insert.js";
import remove from "./delete.js";

const model = {
    select,
    insert,
    delete: remove
};

export default model;