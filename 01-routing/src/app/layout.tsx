export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <body>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
     </body>
   </html>
 )
}