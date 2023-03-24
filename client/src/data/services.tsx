import {FaBriefcaseMedical, FaRegHospital, FaCommentMedical} from "react-icons/fa"

export interface servicesType {
    id: number,
    icon: JSX.Element,
    iconcolor: string,
    title: string,
    info: string
}

export const services:servicesType[] = [
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