import {axi} from "./useAxios"

export const registerRequest = async (
    email: string,
    name: string,
    last_name: string,
    password: string
) => {
    axi.post("/users/register", {
        email,
        name,
        last_name,
        password})};