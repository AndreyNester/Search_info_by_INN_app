import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { StoreProvider } from '../src/app/store/StoreProvider';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
  'http-equiv' : 'upgrade-insecure-requests'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body>
          <MantineProvider>{children}</MantineProvider>
        </body>
      </html>
    </StoreProvider>
  );
}

