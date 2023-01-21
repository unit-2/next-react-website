import Layout from 'components/layout'
import type { AppProps } from 'next/app'
import styles from 'styles/Home.module.css'
import React from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component { ...pageProps } />
		</Layout>
	)
}
