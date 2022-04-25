import MenuButton from './MenuButton'
import Menu from './Menu'
import { useState, useCallback } from "react"

const MiddlePanel = () => {

    const [showMenu, setShowMenu] = useState(false)

    const onShowMenu = useCallback(() => {
        setShowMenu(prevShowMenu => !prevShowMenu
    )}, [])

    return(
        <ul className='middle-panel'>
            <li className="">
                <button>Home</button>
            </li>
            <li>
                <MenuButton onShowMenu={ onShowMenu }/>
                {showMenu? <Menu />: null}
            </li>
            <li>
                <button>Back</button>
            </li>
        </ul>
    )
}
export default MiddlePanel