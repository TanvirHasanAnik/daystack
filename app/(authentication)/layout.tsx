export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="authentication h-screen flex items-center justify-center">
  <div className="bg-blue-200 text-white p-6 rounded flex flex-col">
    <h1>Welcome to DayStack</h1>
    {children}
  </div>
</div>

  );
}