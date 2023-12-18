import type { Meta, StoryObj } from '@storybook/react';
import TestimonialsCard from '../../components/testimonialsCard/TestimonialsCard';
import {FaBriefcaseMedical, FaRegHospital, FaCommentMedical, FaUserTie, FaPhoneAlt} from "react-icons/fa"

const meta = {
  title: 'cards/TestimonialsCard',
  component: TestimonialsCard,
  tags: ['autodocs'],
} satisfies Meta<typeof TestimonialsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testimonial: {
        id: 1,
        image: "okafor",
        name: "Okafor Peter",
        rating: "",
        comment: "This medical emergency web app is an absolute lifesaver! It's incredibly user-friendly and provides step-by-step guidance on what to do in different emergency situations."
    }
  },
};