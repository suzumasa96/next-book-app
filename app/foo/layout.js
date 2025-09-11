import  Link  from 'next/link'

const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <Link href="/foo" prefetch={false}>foo</Link>
                /
                <Link href="/foo/bar" prefetch={false}>bar</Link>
            </nav>
            {children}
        </>
    )
}

export default Layout