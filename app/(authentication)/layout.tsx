


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="authentication h-screen flex items-center justify-center ">
      <div className="text-text p-6 w-1/3 rounded-2xl bg-surface shadow">
        {children}
      </div>
    </div>

  );
}