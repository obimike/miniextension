import Airtable from "airtable";

var base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(`${process.env.REACT_APP_BASE_ID}`);

const Students = base("Students");

export { Students };
