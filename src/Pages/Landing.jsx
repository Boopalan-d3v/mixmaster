import { useLoaderData } from "react-router-dom";

const cocktailSearchUrl = ""

export const loader = async () => {
  return 'something';
}

const Landing = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>Landing</div>
  )
}

export default Landing