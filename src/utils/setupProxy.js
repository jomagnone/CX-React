const proxy = require("http-proxy-middleware")


module.exports = function(app) {
    app.use(
        proxy("/rest",{
            target:"https://gestioncio.telecom.com.ar/",
            changeOrigin:true
        })
    );
};




