export default function NestedLayout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <body>
       
        {children}
        <h1>Nested Layout</h1>
     </body>
   </html>
 )
}