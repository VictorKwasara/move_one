import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Context from '../components/Context';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'SUi Counter UI',
	description: 'Creating a UI for a sui counter object',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Context>
					<Header/>
					{children}
				</Context>
			</body>
		</html>
	);
}
