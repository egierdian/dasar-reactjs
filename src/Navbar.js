import React, { Component } from 'react';

// Cara export arrow function

// CARA 1
// Jika arrow function yang di export secara default
// const Navbar = () => {
//     return (
//         <div>
//             <h3>Navbar</h3>
//         </div>
//     )
// }
// export default Navbar;
// Untuk mengandle atau mengambil component diatas,
// import { Navbar } from "./Navbar";

// CARA 2
// Jika arrow function yang di export tidak secara default
export const Navbar = () => {
    return (
        <div>
            <h3>Navbar</h3>
        </div>
    )
}

export default Navbar;
// Untuk mengandle atau mengambil component diatas,
// import Navbar from "./Navbar";