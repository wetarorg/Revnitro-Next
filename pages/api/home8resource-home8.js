import home8Resource from '../../resources/home8'

export default async function handler(req, res) {
  try {
    const response = await home8Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
