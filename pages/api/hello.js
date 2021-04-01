import Router from "next/dist/next-server/lib/router/router"


const route = async (req, res) => {
  const result = await fetch('https://random-data-api.com/api/cannabis/random_cannabis?size=2');
  const data = await result.json();
  res.status(200).json(data)
}
export default route;