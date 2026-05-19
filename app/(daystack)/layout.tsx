import Footer from "../ui/common/footer"
import Sidebar from "../ui/common/sidebar"
import TopBar from "../ui/common/topbar"

export default function DaystackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="daystack min-h-screen flex flex-col">

      <div className="flex flex-1">
        <aside className="w-64 border border-border p-4 bg-sidebar">
          <Sidebar />
        </aside>

        <main className="flex-1">
        <TopBar />
        <div className="p-6">
          {children}
        </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
          