import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '../components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from '../hooks/AuthContext';
import "../styles/index.scss";

const meta = {
  title: 'Headers/Header',
  component: Navbar,
  decorators: [
    (Story) => (
      <AuthContextProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
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