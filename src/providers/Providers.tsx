'use client'

import { ThemeProvider } from 'next-themes';

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export default function Providers(props: ThemePropsInterface) {
  const { children } = props;

  return (
    <ThemeProvider
      defaultTheme='light'
      attribute='class'
    >
      {children}
    </ThemeProvider>
  )
}