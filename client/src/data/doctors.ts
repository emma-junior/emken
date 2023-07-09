export interface doctorsType {
    id: number,
    image: string,
    name: string,
    facebookAddress: string,
    twitterAddress: string,
    linkedinAddress: string
}

export const doctors:doctorsType[] = [
        {
            id: 1,
            image: "dr-johnson",
            name: "Dr. Johnson Peter",
            facebookAddress: "https://emken.vercel.app/",
            twitterAddress: "https://emken.vercel.app/",
            linkedinAddress: "https://emken.vercel.app/"
        },
        {
            id: 2,
            image: "dr-esther",
            name: "Dr. Obi Esther",
            facebookAddress: "https://emken.vercel.app/",
            twitterAddress: "https://emken.vercel.app/",
            linkedinAddress: "https://emken.vercel.app/"
        },
        {
            id: 3,
            image: "dr-ezeh",
            name: "Dr. Ezeh Charles",
            facebookAddress: "https://emken.vercel.app/",
            twitterAddress: "https://emken.vercel.app/",
            linkedinAddress: "https://emken.vercel.app/"
        }
    ]