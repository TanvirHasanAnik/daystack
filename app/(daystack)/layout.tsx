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
      <TopBar />

      <div className="flex flex-1">
        <aside className="w-64 border-r p-4">
          <Sidebar />
        </aside>

        <main className="flex-1 p-6 flex items-center justify-center">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  )
}
          