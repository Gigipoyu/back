import app from "../../api"
import express from express


const initUserRoutes = (app) => {
    const router = express.Router()
    router.post("/signUp", UserController.signUp)
    router.post("/signIn", UserController.signIn)
    router.get("/read", UserController.read)
    router.get("/readOneUser", UserController.readOneUser)
    router.put("/updateUser", UserController.updateUser)

    app.use("/api/users", router)
    
}

export default initUserRoutes