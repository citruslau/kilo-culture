const fs = require('fs');
const path = require('path');

class PersistenceManager {
  constructor() {
    if (!PersistenceManager.instance) {
      // Define the file path to src/data/index.js
      this.filePath = path.join(__dirname, '../data/index.js');
      this.data = this.loadData();
      PersistenceManager.instance = this;
    }
    return PersistenceManager.instance;
  }

  // Load the current data from index.js
  loadData() {
    delete require.cache[require.resolve(this.filePath)];
    return require(this.filePath);
  }

  // Method to get cardsData
  getCardsData() {
    return this.data.cardsData;
  }

  // Method to update cardsData
  setCardsData(newCardsData) {
    this.data.cardsData = newCardsData;
  }

  // Method to get ordersData
  getOrdersData() {
    return this.data.ordersData;
  }

  // Method to update ordersData
  setOrdersData(newOrdersData) {
    this.data.ordersData = newOrdersData;
  }

  // Method to get INITIAL_EVENTS
  getInitialEvents() {
    return this.data.INITIAL_EVENTS;
  }

  // Method to update INITIAL_EVENTS
  setInitialEvents(newEvents) {
    this.data.INITIAL_EVENTS = newEvents;
  }

  // Method to get boardData
  getBoardData() {
    return this.data.boardData;
  }

  // Method to update boardData
  setBoardData(newBoardData) {
    this.data.boardData = newBoardData;
  }

  // Method to get userData
  getUserData() {
    return this.data.userData;
  }

  // Method to update userData
  setUserData(newUserData) {   
    this.data.userData = newUserData;
  }

  // Method to save all the updated data to index.js
  saveData() {
    const content = `
import moment from "moment/moment";

export const cardsData = ${JSON.stringify(this.data.cardsData, null, 2)};

// Existing ordersData
export const ordersData = ${JSON.stringify(this.data.ordersData, null, 2)};

//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};

//* calendar Events
let eventGuid = 0;
let todayStr = moment().format("YYYY-MM-DD"); // YYYY-MM-DD of today
export const INITIAL_EVENTS = ${JSON.stringify(this.data.INITIAL_EVENTS, null, 2)};

export function createEventId() {
  return String(eventGuid++);
}

// * tasks
export const boardData = ${JSON.stringify(this.data.boardData, null, 2)};

// * user table data
export const userData = ${JSON.stringify(this.data.userData, null, 2)};
`;

    // Write the content to the file
    fs.writeFileSync(this.filePath, content, 'utf-8');
    console.log('Data saved to src/data/index.js');
  }
}

const instance = new PersistenceManager();
Object.freeze(instance);

module.exports = instance;
