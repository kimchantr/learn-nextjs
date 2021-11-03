import type { NextApiRequest, NextApiResponse } from 'next'
import { Meetup } from '../../../models'

// api/posts/create

export default async function handler(req: NextApiRequest, res: NextApiResponse<Meetup>) {
  if (req.method === 'POST') {
    const data = req.body

    const response = await fetch('http://json-server-kctrnn.herokuapp.com/api/meetups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const responseJSON = await response.json()

    res.status(200).json(responseJSON)
  }
}
