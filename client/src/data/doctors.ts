export interface doctorsType {
    id: number,
    image: string,
    imagePlaceholder:string,
    name: string,
    facebookAddress: string,
    twitterAddress: string,
    linkedinAddress: string
}

export const doctors:doctorsType[] = [
        {
            id: 1,
            image: "dr-johnson",
            imagePlaceholder: "dr-johnson-placeholder",
            name: "Dr. Johnson Peter",
            facebookAddress: "https://emken.vercel.app/",
            twitterAddress: "https://emken.vercel.app/",
            linkedinAddress: "https://emken.vercel.app/"
        },
        {
            id: 2,
            image: "dr-esther",
            imagePlaceholder: "dr-esther-placeholder",
            name: "Dr. Obi Esther",
            facebookAddress: "https://emken.vercel.app/",
            twitterAddress: "https://emken.vercel.app/",
            linkedinAddress: "https://emken.vercel.app/"
        },
        {
            id: 3,
            image: "dr-ezeh",
            imagePlaceholder: "dr-ezeh-placeholder",
            name: "Dr. Ezeh Charles",
            facebookAddress: "https://emken.vercel.app/",
            twitterAddress: "https://emken.vercel.app/",
            linkedinAddress: "https://emken.vercel.app/"
        }
    ]