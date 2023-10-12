import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  const urlParams = {
    populate: '*',
    'pagination[limit]': 4,
  }
  const data = await fetch(
    `${process.env.CMS_URL}/api/Courses?${new URLSearchParams(urlParams)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  const response = await data.json()
  return normalize(response)
}
