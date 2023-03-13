require("dotenv").config()

const appConfig = {
    // appUrl: "https://car-renting-server.now.sh",
    appUrl: "http://localhost:8005",
    token: localStorage.getItem("token") || "",
    authToken: () => localStorage.getItem("token") || ""
};
export default appConfig
