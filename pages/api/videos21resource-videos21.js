import videos21Resource from '../../resources/videos21'

export default async function handler(req, res) {
  try {
    const response = await videos21Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
