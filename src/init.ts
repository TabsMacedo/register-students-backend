import server  from "./server";

const PORT = process.env.PORT;

server.listen(PORT, () => {
  if(process.env.NODE_ENV == 'production'){
    console.log(`"Production Server running on port ${process.env.PORT}`)
  }
  if(process.env.NODE_ENV == 'development'){
    console.log(`"Development Server running on port ${process.env.PORT}`)
  }
  if(process.env.NODE_ENV == 'local'){
    console.log(`"Local Server running on port ${process.env.PORT}`)
  }
});
