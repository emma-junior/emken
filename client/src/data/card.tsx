import {FaBriefcaseMedical, FaRegHospital, FaCommentMedical, FaUserTie, FaPhoneAlt} from "react-icons/fa"
import {IoIosPeople} from "react-icons/io"

export interface cardType {
    id: number,
    icon: JSX.Element,
    iconcolor: string,
    title: string,
    info: string
}

export const services:cardType[] = [
    {
        id: 1,
        icon: <FaBriefcaseMedical />,
        iconcolor: "red",
        title: "Medical Emergency",
        info: "We are here to provide you with steps to take for every medical emergency"
    },
    {
        id: 2,
        icon: <FaRegHospital />,
        iconcolor: "green",
        title: "Find Hospital",
        info: "We give you the location and direction to every medical hospital close to you"
    },
    {
        id: 3,
        icon: <FaCommentMedical />,
        iconcolor: "blue",
        title: "Chat With Doctor",
        info: "We provide you with the opportunity to chat with medical experts for medical related issues"
    }
]

export const chooseUs:cardType[] = [
    {
        id: 1,
        icon: <FaUserTie />,
        iconcolor: "blue",
        title: "All Professionals",
        info: "All medical practioners rendering services in emken are all professionals"
    },
    {
        id: 2,
        icon: <IoIosPeople />,
        iconcolor: "green",
        title: "Happy Patients",
        info: "All users of emken always have a positive feedback to give"
    },
    {
        id: 3,
        icon: <FaPhoneAlt />,
        iconcolor: "blue",
        title: "24 Hours Support",
        info: "We are available 24 hours a day to attend to all chat"
    },
]