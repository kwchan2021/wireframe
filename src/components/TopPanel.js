import { useCallback, useState } from "react"

const TopPanel = ({ checkedNo }) => {
    const userName = "<MyUserName>"

    const [showNotification, setShowNotification] = useState(false)

    const handleShowNotification = useCallback(() => {
        setShowNotification(prevShowNotification => !prevShowNotification)
    }, [])

    const handleLogout = useCallback(() => {
        if (window.confirm("Close Window?")) {
            window.opener=null;
            window.open("", "_self");
            window.close();
          }
    }, [])

    return (
        <ul className="top-panel">
            <li><i className="fa-solid fa-earth-americas"></i> Blue Planet</li>
            <li>Welcome {userName}</li>
            <li>
                <i className="fa-solid fa-bell" onClick={ handleShowNotification }></i>
                {showNotification
                ? <span className={checkedNo!==0? "active": null}>{checkedNo!==0? checkedNo:null}</span>
                : null  
                }
            </li>
            <li><i className="fa-solid fa-user"></i></li>
            <li onClick={handleLogout}>| Logout</li>
            <li></li>
        </ul>
    )
}

export default TopPanel