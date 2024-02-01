import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server is ready!!");
});

//get a list of jokes
// app.get('/api/jokes',(req,res)=>{
//     const jokes=[
//         {
//             id:1,
//             title:'A joke',
//             content:'this is a joke'
//         },
//         {
//             id:2,
//             title:'B joke',
//             content:'this is B joke'
//         },
//         {
//             id:3,
//             title:'C joke',
//             content:'this is C joke'
//         },
//         {
//             id:4,
//             title:'D joke',
//             content:'this is D joke'
//         },
//         {
//             id:5,
//             title:'E joke',
//             content:'this is E joke'
//         },
//     ]
//     res.send(jokes)
// })

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});


// import http from 'node:http';

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!!!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });