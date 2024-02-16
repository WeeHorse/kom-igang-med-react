import { useLoaderData } from 'react-router-dom';

function MyDataFromLoaderPage() {
  const loaderData = useLoaderData()
  return <>
    <h1>My Data from loader page {loaderData.loadedProp}</h1>
  </>

}

export default MyDataFromLoaderPage