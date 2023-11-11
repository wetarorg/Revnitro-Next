import home4Resource from '../../resources/home4'

export default async function handler(req, res) {
  try {
    const response = await home4Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
