import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import { authenticated } from '../../../api/authenticated';

export default authenticated(async function getAllVehicles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open('./mydb.sqlite');
  const vehicles = await db.all('select * from vehicle');

  res.json(vehicles);
});
