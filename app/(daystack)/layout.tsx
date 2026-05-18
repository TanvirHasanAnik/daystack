import Footer from "../ui/common/footer"
import Sidebar from "../ui/common/sidebar"
import TopBar from "../ui/common/topbar"

export default function DaystackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="daystack">
    <TopBar />
    <div className="flex">
      <aside className="w-64 border-r p-4">
        <Sidebar/>
      </aside>
      <main className="p-6 flex-1">{children}</main>
    </div>
    <Footer />
    </div>
  )
}
          