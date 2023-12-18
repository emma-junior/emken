import type { Meta, StoryObj } from '@storybook/react';
import DoctorCard from '../../components/doctorcard/DoctorCard';

const meta = {
  title: 'cards/DoctorCard',
  component: DoctorCard,
  tags: ['autodocs'],
} satisfies Meta<typeof DoctorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    doctor: {
        id: 1,
        image: "dr-johnson",
        imagePlaceholder: "dr-johnson-placeholder",
        name: "Dr. Johnson Peter",
        facebookAddress: "https://emken.vercel.app/",
        twitterAddress: "https://emken.vercel.app/",
        linkedinAddress: "https://emken.vercel.app/"
    }
  },
};