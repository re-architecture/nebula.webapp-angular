//Proxy To Backend 
//https://github.com/angular/angular-cli/wiki/stories-proxy

const PROXY_CONFIG = [
    {
        context: [
            "/api",
            "/apix",
            "/endpoints"
        ],
        target: "http://localhost:8080",
        secure: false,
        logLevel: "debug"  // debug, info, warn, error, and silent default is info
    }
  ]
  
  module.exports = PROXY_CONFIG;