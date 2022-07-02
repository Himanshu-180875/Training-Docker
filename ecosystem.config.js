module.exports = {
  apps: [{
    name: "crypto",
    cwd:"./packages/cryptography/app",
    script: "index.js",

    env: {
      NODE_ENV: "jwt"
   },
   
   env_session: {
      NODE_ENV: "session"
   }
  },{
    name: "websocket",
    cwd:"./packages/websocket",
    script:"index.js"
  }]
}
