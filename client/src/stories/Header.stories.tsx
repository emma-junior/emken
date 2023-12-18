import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '../components/navbar/Navbar';
import { AuthContextProvider } from '../hooks/AuthContext';

const meta = {
  title: 'Headers/Header',
  component: Navbar,
  decorators: [
    (Story) => (
      <AuthContextProvider>
        <Story />
      </AuthContextProvider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn = {
  args: {
    isLoggedIn: true
  },
};

export const LoggedOut = {
  args: {
    isLoggedIn: false
  }
};