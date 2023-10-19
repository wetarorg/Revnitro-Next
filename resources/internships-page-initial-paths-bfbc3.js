export default async function (params = {}) {
  const urlParams = {
    fields: 'id',
  }
  const data = await fetch(
    `${process.env.CMS_URL}/api/Internships?${new URLSearchParams(urlParams)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  const response = await data.json()
  return response
}
