import Link from 'next/link';

const persons = [{
  name: 'John',
  vehicle: 'car'
},{
  name: 'Bruno',
  vehicle: 'airplane'
},{
  name: 'Monica',
  vehicle: 'bike'
}]

const Details = () => {
  return (<div>
    <h1>Details page</h1>
    {persons.map(({ name, vehicle }) => (
      <>
      <hr />
      <Link as={`/${vehicle}/${name}`} href="/[vehicle]/[person]">
        <a>{name}'s {vehicle}</a>
        </Link>
      </>
    ))}
  </div>)
};

export default Details;
