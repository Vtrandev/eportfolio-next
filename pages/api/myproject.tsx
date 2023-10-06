import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = 
        [{
            id: 0,
            project: "PrimeSolution Financing",
            src: "/assets/primesolution.png",
            codeurl: "https://github.com/Vtrandev/primesolutions",
            siteurl: "https://primesolutions.vercel.app/",
            tech: "Next.js, TailwindCSS",
            description: "Experience a real-world financing and loan landing page designed for lead generation using React Hook Form. Enhanced performance with SEO optimization and responsiveness with a Mobile-first approach. Continuous integration, continuous delivery, and continuous deployment techniques. Developed with Next.js and Tailwind CSS, utilizing backend API fetches and integration with Google Sheets",
        },
        {
            id: 1,
            project: "Promptagram",
            src: "/assets/promptagram.png",
            codeurl: "https://github.com/Vtrandev/promptagram",
            siteurl: "https://promptagram-kappa.vercel.app/",
            tech: "Next.js, TailwindCSS, MongoDB",
            description: "Full stack web application built with Next.js 13, TailwindCSS and using MongoDB as a backend database. Sign-in authentication implemented with Google Sign-in and optional Guest login. Able to create and post, edit, and share prompts, along with user profile pages and search functionality.",
        },
        {
            id: 2,
            project: "NFT World Clone",
            src: "/assets/NFT.png",
            codeurl: "https://github.com/Vtrandev/vuong-internship",
            siteurl: "https://vuong-internship.vercel.app/",
            tech: "React.js, HTML, CSS, JavaScript",
            description: "Transformed a single page application into an interactive user interface using animations, transitions, and carousels. Processed API requests with Axios, dynamic routing, fully responsive, and skeleton loading states. Built with best practices in mind using React.js, JavaScript, CSS, and HTML.",
        },
        {
            id: 3,
            project: "Twitter Clone",
            src: "/assets/twitter.png",
            codeurl: "https://github.com/Vtrandev/twitter-clone",
            siteurl: "https://twitter-clone-vtrandev.vercel.app/",
            tech: "Next.js, Tailwind CSS, Redux, Firebase v9",
            description: "Created a social media app clone with posting tweets, commenting, liking, and sharing images functionality.",
        },
        {
            id: 4,
            project: "E-Commerce Library",
            src: "/assets/E-Commerce.png",
            codeurl: "https://github.com/Vtrandev/library-react",
            siteurl: "https://library-react-gilt.vercel.app/",
            tech: "React.js, HTML, CSS, JavaScript",
            description: "Dynamic routing, fully responsive e-commerce website, along with cart functionality. Built with best practices in mind using React.js, JavaScript, CSS, and HTML.",
        },
    ]

    res.status(200).send({ data })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}