import moment from "moment/moment";

export const cardsData = [
  {
    title: "Revenue",
    change: 24,  // Example change percentage
    amount: 42056, // Example revenue amount
  },
  {
    title: "Number of Members",
    change: -14,  // Example change in members
    amount: 200,   // Example number of members
  },
  {
    title: "Number of Members with Coaching",
    change: 18,  // Example change in members with coaching
    amount: 75,   // Example number of members with coaching
  },
];

// Existing ordersData
export const ordersData = [
  {
    name: "Skateboard",
    type: "Illustration",
    items: 58,
    change: 290,
  },
  {
    name: "Language courses",
    type: "Illustration",
    items: 12,
    change: 72
  },
  {
    name: "Office Collaboration",
    type: "Illustration",
    items: 7,
    change: 70
  },
  {
    name: "Robot",
    type: "Illustration",
    items: 21,
    change: 15
  }
];

//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};

//* calendar Events
let eventGuid = 0;
let todayStr = moment().format("YYYY-MM-DD"); // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Lunch Party',
    start: todayStr + 'T09:00:00',
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Payment Schedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
];

export function createEventId() {
  return String(eventGuid++);
}

// * tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "Firebase Integration"
        },
        {
          id: 2,
          title: "Data Flow",
          description: "Setup Diagram with other developers"
        },
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Data Table Page",
          description: "Server side Pagination",
        }
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Full Calendar Extension",
          description: "Make new events and store in global states"
        },
        {
          id: 11,
          title: "Custom Kanban Board",
          description: "Setup react-kanban dep within Dashboard as separate page"
        }
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Vite Server Setup",
          description: "Configure required modules and starters"
        },
        {
          id: 13,
          title: "Modular structure",
          description: "Write css in form of modules to reduce the naming conflicts"
        }
      ]
    }
  ]
}

// * user table data
export const userData = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    membershipType: 'Walk-in',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    membershipType: 'Monthly',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    membershipType: 'Annual',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
<<<<<<< Updated upstream
    membershipType: 'Monthly',
=======
    membershipType: 'Walk-in',
>>>>>>> Stashed changes
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
<<<<<<< Updated upstream
    membershipType: 'Walk-in',
=======
    membershipType: 'Monthly',
>>>>>>> Stashed changes
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    membershipType: 'Annual',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
<<<<<<< Updated upstream
    membershipType: 'Monthly',
=======
    membershipType: 'Walk-in',
>>>>>>> Stashed changes
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
<<<<<<< Updated upstream
    membershipType: 'Annual',
=======
    membershipType: 'Monthly',
>>>>>>> Stashed changes
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
<<<<<<< Updated upstream
    membershipType: 'Walk-in',
=======
    membershipType: 'Annual',
>>>>>>> Stashed changes
  },
];


