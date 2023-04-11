import { Ilogin, Iuser } from "../interface/user";
import instance from "./instance";
const addUser = async (data: Iuser) => {
    return await instance.post("/singup", data)
}

const getallUser = () => {
    return instance.get("/singup")
}

const login = (data: Ilogin) => {
    return instance.post("/singin", data)
}
export { addUser, getallUser, login }