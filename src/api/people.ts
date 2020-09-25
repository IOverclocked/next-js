import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';

export default async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open('./mydb.sqlite');
  const people = await db.all('select * from person');

  res.json(people);
}
