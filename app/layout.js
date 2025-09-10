export const metadata = {
  title: {
    template: "%s | Next Book App",
    default: "Next Book App",
  },
  description: "これは書籍のサンプルサイトです",
  openGraph: {
    siteName: "Next Book Ap",
    title: {
      template: "%s | Next Book App(OGP)",
      default: "Next Book App(OGP)",
    },
    description: "これは書籍のサンプルサイトです(OGP)",
    type: "article",
    images: [
      {
        url: "https://.../ogp.png",
      }
    ]
  }
}

const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <header>
          <h1>Next Book App</h1>
        </header>
        {children}
        <footer>copyright Next Book App 2025</footer>
      </body>
    </html>
  )
}

export default RootLayout