import blogs12Resource from '../../resources/blogs12'

export default async function handler(req, res) {
  try {
    const response = await blogs12Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
