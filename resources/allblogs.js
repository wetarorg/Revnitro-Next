import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  const urlParams = {
    populate: '*',
    'pagination[limit]': 4,
    ...(params['pagination[start]'] && {
      'pagination[start]': params['pagination[start]'],
    }),
    'filters[Category][$eq]': 'bike review',
  }
  const data = await fetch(
    `${process.env.CMS_URL}/api/Blogs?${new URLSearchParams(urlParams)}`,
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