

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            
            <body >
                    <div>
                       

                        <div className="h-screen"> 
                        {children}
                        </div>
                       
                    

                    </div>
                
                
                
            </body>
        </html>
    );
}
