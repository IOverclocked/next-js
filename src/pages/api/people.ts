import { verify } from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import { authenticated } from '../../../api/authenticated';
import { secret } from '../../../api/secret';

export default authenticated(async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open('./mydb.sqlite');
  const people = await db.all('select id, email, name from person');

  res.json(people);
});
