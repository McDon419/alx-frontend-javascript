/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create initial row
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and capture ID
const newRowID: RowID = CRUD.insertRow(row);

// Update row with age
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Perform update
CRUD.updateRow(newRowID, updatedRow);

// Perform delete
CRUD.deleteRow(newRowID);
