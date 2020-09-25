
const { open } = require('sqlite');

// initial data to db
// (async () => {
//   const db = await open('./mydb.sqlite')
//   await db.migrate({ force: 'last' });
// })

open('./mydb.sqlite').then(async db => {
  const people = await db.all('SELECT * FROM person');
  const vehicle = await db.all('SELECT * FROM vehicle');

  console.log('ALL PEOPLE', JSON.stringify(people, null, 2));
  console.log('ALL VEHICLE', JSON.stringify(vehicle, null, 2));
});
