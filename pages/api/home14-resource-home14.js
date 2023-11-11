import home14Resource from '../../resources/home14'

export default async function handler(req, res) {
  try {
    const response = await home14Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
