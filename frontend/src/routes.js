
var production = true;

var base = !production ? "http://localhost:3000" : "";

const routes = {
    signup : base +"/api/signup",
    login: base + "/api/login",
    getUser: base + "/api/getUser",
    logout: base + "/api/logout",
    getProducts: base + "/api/products",
    addProduct : base + "/api/products/create",
    deleteProduct : base + "/api/products/delete/",
}

export {routes};