import React from "react";

const Carrito = ({size}) =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 40.53 31.53"
      width={size} 
      height={size}
    >
      <path
        d="M38 19c1 0 1-1 1-4V9.86A2.21 2.21 0 0037 8H20V2c0-1.06-.24-2-2-2h-5c-3 0-6 8-6 8s-6 0-6 3v4s-1 .34-1 2a1.81 1.81 0 002 2z"
        className="troca1"
      ></path>
      <path
        d="M10 7c0 1 .45 1 1 1h5a1 1 0 001-1V3a1 1 0 00-1-1h-3c-1 0-3 4-3 5z"
        className="troca2"
      ></path>
      <path d="M1 11h1v5H1z" className="troca3"></path>
      <path
        d="M2 19H1a1 1 0 01-1-1v-2a1 1 0 011-1h1a1 1 0 011 1v2a1 1 0 01-1 1zM39.53 19.47h-1a1 1 0 01-1-1v-2a1 1 0 011-1h1a1 1 0 011 1v2a1 1 0 01-1 1z"
        className="troca4"
      ></path>
      <path d="M1.55 23.53a8 8 0 118 8 8 8 0 01-8-8z" className="troca5"></path>
      <path
        d="M14.55 23.53a5 5 0 11-5-5 5 5 0 015 5z"
        className="troca3"
      ></path>
      <path
        d="M12.55 23.53a3 3 0 11-3-3 3 3 0 013 3z"
        className="troca4"
      ></path>
      <path
        d="M11.55 23.53a2 2 0 11-2-2 2 2 0 012 2z"
        className="troca6"
      ></path>
      <path
        d="M21.49 23.53a8 8 0 118 8 8 8 0 01-8-8z"
        className="troca5"
      ></path>
      <path
        d="M34.49 23.53a5 5 0 11-5-5 5 5 0 015 5z"
        className="troca3"
      ></path>
      <path
        d="M32.49 23.53a3 3 0 11-3-3 3 3 0 013 3z"
        className="troca4"
      ></path>
      <path
        d="M31.49 23.53a2 2 0 11-2-2 2 2 0 012 2z"
        className="troca6"
      ></path>
      <path
        d="M39 8.13a1.5 1.5 0 01-1.5 1.5H20v-3h17.5a1.5 1.5 0 011.5 1.5z"
        className="troca7"
      ></path>
      <style>{`
          .troca1{fill:#dd2e44;}.troca2{fill:#bbddf5;}.troca3{fill:#99aab5;}.troca4{fill:#ccd6dd;}.troca5{fill:#292f33;}.troca6{fill:#66757f;}.troca7{fill:#f492a9;}
     `}</style>
    </svg>
  );
}

export default Carrito;
