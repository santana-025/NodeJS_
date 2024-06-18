const routerAtendimentos = require("./atendimentosRouters");
module.exports = (app) => {
    app.use(routerAtendimentos);


}