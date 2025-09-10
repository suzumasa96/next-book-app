const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <a href="/foo">foo</a>/<a href="/foo/bar">bar</a>
            </nav>
            {children}
        </>
    )
}

export default Layout