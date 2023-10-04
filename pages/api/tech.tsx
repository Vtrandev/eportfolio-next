import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = 
        [{
            id: 0,
            language: "HTML",
        },
        {
            id: 1,
            language: "CSS",
        },
        {
            id: 2,
            language: "JavaScript",
        },
        {
            id: 3,
            language: "TypeScript",
        },
        {
            id: 4,
            language: "React",
        },
        {
            id: 5,
            language: "Next",
        },
        {
            id: 6,
            language: "Firebase",
        },
        {
            id: 7,
            language: "Redux",
        },
    ]

    res.status(200).send({ data })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}