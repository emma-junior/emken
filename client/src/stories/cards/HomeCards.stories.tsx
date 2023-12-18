import type { Meta, StoryObj } from '@storybook/react';
import HomeCard from '../../components/homecard/HomeCard';
import {FaBriefcaseMedical, FaRegHospital, FaCommentMedical, FaUserTie, FaPhoneAlt} from "react-icons/fa"

const meta = {
  title: 'cards/HomeCard',
  component: HomeCard,
  tags: ['autodocs'],
} satisfies Meta<typeof HomeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: {
      id: 1,
      icon: <FaBriefcaseMedical />,
      iconcolor: "red",
      title: "Medical Emergency",
      info: "We are here to provide you with steps to take for every medical emergency"
    }
  },
};