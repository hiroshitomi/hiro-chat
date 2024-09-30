import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client"

const SocketContext = createContext()

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext()


    useEffect(() => {
        if (authUser){
            // use url when you develop and then change url when you deploy
            // const socket = io("http://localhost:5000", {
            const socket = io("https://hiro-chat.onrender.com", {
                query: {
                    userId: authUser._id
                }
            })
            setSocket(socket)

            socket.on("getOnlineUsers", (users) =>{
                setOnlineUsers(users)
            })
            return () => socket.close()
        } else {
            if(socket){
                socket.close()
                setSocket(null)
            }
        }
    }, [authUser])
    
    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}