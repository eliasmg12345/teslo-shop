import Head from 'next/head';
import { FC, ReactNode } from 'react'
interface Props {
    title: string;
    pageDescription: string;
    imageFulUrl?: string;
    children: ReactNode
}
const ShoptLayout: FC<Props> = ({ children, title, pageDescription, imageFulUrl }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={pageDescription} />

                {imageFulUrl && (
                    <meta name='og:image' content={imageFulUrl} />
                )}
            </Head>

            <nav>

            </nav>

            <main style={{
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            }}>
                {children}
            </main>

            <footer>

            </footer>
        </>
    )
}

export default ShoptLayout