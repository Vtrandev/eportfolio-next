import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = 
        [{
            id: 0,
            project: "PrimeSolution Financing",
        },
        {
            id: 1,
            project: "Promptagram",
        },
        {
            id: 2,
            project: "NFT World Clone",
        },
        {
            id: 3,
            project: "Twitter Clone",
        },
        {
            id: 4,
            project: "E-Commerce Library",
        },
    ]

    res.status(200).send({ data })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}