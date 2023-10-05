import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = 
        [{
            id: 0,
            language: "HTML",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png",
        },
        {
            id: 1,
            language: "CSS",
            src: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png",
        },
        {
            id: 2,
            language: "JavaScript",
            src: "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png",
        },
        {
            id: 3,
            language: "TypeScript",
            src: "./assets/Typescript.svg",
        },
        {
            id: 4,
            language: "React",
            src: "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png",
        },
        {
            id: 5,
            language: "Next",
            src: "./assets/logonext.png",
        },
        {
            id: 6,
            language: "Firebase",
            src: "./assets/logofirebase.png",
        },
        {
            id: 7,
            language: "Redux",
            src: "./assets/redux.png",
        },
    ]

    res.status(200).send({ data })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}