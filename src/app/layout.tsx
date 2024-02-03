import type { Metadata } from 'next';
import { Single_Day } from 'next/font/google';
import './globals.css';

const inter = Single_Day({ weight: '400' });

export const metadata: Metadata = {
	title: 'Be My Valentine',
	description: 'Will you be my valentine?',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
