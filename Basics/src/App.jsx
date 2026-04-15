// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let number = 248;
//   let name = "Aparna";
//   let b = true;
//   return(
//     <>
//       <h1>Numbers</h1>
//       <h2>Number value is : {number}</h2>
//       <h1>String</h1>
//       <h2>String value is : {name}</h2>
//       <h1>Boolean</h1>
//       <h2>Boolean value is : {b.toString()}</h2>
//     </>
//   )
// }

// export default App




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let obj = {name:"Aparna", age:20}
//   return(
//     <>
//       <h1>Welcome User {obj.name}</h1>
//       <h2>User age is : {obj.age}</h2>
//     </>
//   )
// }

// export default App




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let arr = [10, 20, 30];
//   return(
//     <ul>
//       {
//         arr.map((element) => {
//           return (<li>{element}</li>)
//         })
//       }
//     </ul>
//   )
// }

// export default App




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let arr = [10, 20, 30];
//   let boolean = [true, false];
//   let string = ["Aparna", "Swayam"];
//   let products = [{name:"Samsumg", price:24800}]
//   return(
//     <>
//       <ul>
//         {
//           arr.map((element) => {
//             return (<li>{element}</li>)
//           })
//         }
//       </ul>
//       {
//         boolean.map((element) => {
//           return (<h2>{element.toString()}</h2>);
//         })
//       }
//       {
//         string.map((element) => {
//           return (<div>{element}</div>)
//         })
//       }
//       {
//         products.map((element) => {
//         return (
//           <div>
//             <h3>{element.name}</h3>
//             <p>₹{element.price}</p>
//           </div>
//           )
//         })
//       }
//     </>
//   )
// }

// export default App




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let value = true;
//   return(
//     <>
//       {value ? <button>Add</button> : <button>Remove</button>}
//     </>
//   )
// }

// export default App




// // functional components

// import React from "react"

// function App(){
//     let name = "Chitkara"
//     let arr = ["Aparna", "Swayam"]
//     let isLoggedIn = true
//     return(
//         // React.createElement("div", {id: "container"}, "Hello World")
//         // React.createElement("div", {id: "container"},
//         //     React.createElement("div", null,
//         //         React.createElement("div", null, "Hello World")
//         //     )
//         // )

//         // <div id="container">
//         //     <div>
//         //         <h1>Hello World</h1>
//         //     </div>
//         // </div>
        
//         <>
//             <h1 className="heading">Hello {name}</h1>
//             <p style={{
//                 color: "pink",
//                 backgroundColor: "teal"
//             }}>This is a paragragh tag</p>
//             <ul>
//                 {arr.map((value) => {
//                     return <li>{value}</li>
//                 })}
//             </ul>
//             {/* {isLoggedIn == true ? <button>Logout</button> : <button>Login</button>} */}
//             <button>{isLoggedIn == true ? "Logout" : "Login"}</button>
//         </>
//     )
// }

// export default App




// // class components

// import React from "react"

// class App extends React.Component{
//     render(){
//         let name = "Chitkara"
//         let arr = ["Aparna", "Swayam"]
//         let isLoggedIn = true
//         return(
//             // React.createElement("div", {id: "container"}, "Hello World")
//             // React.createElement("div", {id: "container"},
//             //     React.createElement("div", null,
//             //         React.createElement("div", null, "Hello World")
//             //     )
//             // )
            
//             // <div id="container">
//             //     <div>
//             //         <h1>Hello World</h1>
//             //     </div>
//             // </div>
            
//             <>
//                 <h1 className="heading">Hello {name}</h1>
//                 <p style={{
//                     color: "pink",
//                     backgroundColor: "teal"
//                 }}>This is a paragragh tag</p>
//                 <ul>
//                     {arr.map((value) => {
//                         return <li>{value}</li>
//                     })}
//                 </ul>
//                 {/* {isLoggedIn == true ? <button>Logout</button> : <button>Login</button>} */}
//                 <button>{isLoggedIn == true ? "Logout" : "Login"}</button>
//             </>
//         )
//     }
// }

// export default App