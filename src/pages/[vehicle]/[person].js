import { useRouter } from 'next/router'

const Person = () => {
  const { query } = useRouter()
  const { person, vehicle } = query
  console.log(query)
  return <h2>{vehicle} {person}</h2>
}

export default Person