export enum FILTERS {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}

export const filterOptions = [
  {
    key: FILTERS.ALL,
    filter: FILTERS.ALL,
    text: "All",
  },
  {
    key: FILTERS.ACTIVE,
    filter: FILTERS.ACTIVE,
    text: "Active",
  },
  {
    key: FILTERS.COMPLETED,
    filter: FILTERS.COMPLETED,
    text: "Completed",
  },
];
