import Footer from "../ui/common/footer"
import Sidebar from "../ui/common/sidebar"
import TopBar from "../ui/common/topbar"

export default function DaystackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
            <div className="daystack">
            <TopBar />
            <div className="flex">
              <Sidebar/>
              <main className="p-6 flex-1">{children}</main>
            </div>
            <Footer />
            </div>
      </body>
    </html>
  )
}
          