

function Footer() {
  const year = new Date().getFullYear();
  return ( 

    <>
      <div className="bg-green-400 relative -bottom-0 mt-1 w-full h-fit text-white text-center p-6 text-xl"> 
        Made with love 💖 from Nobles, <p> {year} All rights reserved</p> 
            </div>

           
    </>
  
  );
}

export default Footer;