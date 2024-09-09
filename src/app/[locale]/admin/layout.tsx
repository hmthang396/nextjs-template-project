export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <p>Layout for Admin</p>
      {children}
    </section>
  );
}
