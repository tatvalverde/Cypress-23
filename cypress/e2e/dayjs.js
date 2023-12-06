const dayjs = require('dayjs');  // day.js.org

const date = dayjs()

// can use       const date = dayjs('2022-10-01')

console.log(`My date is ${date.add(5, 'day').add(10, 'year').format('YYYY-MM-DD')}`);

// FORMAT can be different 'DD MMMM YYYY'  (11 December 2033)
// FORMAT can be different 'MMM DD, YYYY'  (Dec 11, 2033)
// FORMAT can be different 'YYYY.MM.DD'  (2033.12.11)

const [ year, month, day ] = date.add(5, 'day').format('YYYY-MM-DD').split('-');
console.log(year);