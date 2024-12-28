import { GlobalProviders } from "./_components/GlobalProviders"
import { LayoutWrapper } from "./_components/LayoutWrapper"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        />
        <link rel="stylesheet" href="https://use.typekit.net/isa7scp.css" />
      </head>
      <body>
        <GlobalProviders>
          <LayoutWrapper>{children}</LayoutWrapper>
        </GlobalProviders>
      </body>
    </html>
  )
}
