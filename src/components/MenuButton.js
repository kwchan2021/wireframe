const MenuButton = ({ onShowMenu }) => {
    return (
        <button onClick={onShowMenu}>
            Menu <i className="fa-solid fa-caret-down"></i>
        </button>
    )
}

export default MenuButton