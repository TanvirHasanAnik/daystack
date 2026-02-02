import Footer from "../ui/common/footer";
import Sidebar from "../ui/common/sidebar";
import TopBar from "../ui/common/topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="daystack">
          <TopBar />
          <div className="flex">
            <Sidebar/>
            <main className="p-6 flex-1">{children}</main>
          </div>
          <Footer />
        </div>
  );
}