import { useState, createContext } from "react";


const Notification = ({ message, severity }) => {

    const notificationStyles = {
        position: "absolute",
        top: 100,
        right: 10,
        width: "auto",
        height: "auto", 
        padding: "10px 20px 10px 20px",
        color: "white",
        backgroundColor: severity === "success" ? "green" : "red"
    }

    if(message === '') return

    return (
        <div style={notificationStyles}>
            {message}
        </div>
    )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState("")
    const [severity, setSeverity] = useState("success")

    const setNotification = (sev, msg) => {
        setMessage(msg)
        setSeverity(sev)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
          <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    )
}

export default Notification 