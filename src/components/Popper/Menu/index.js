import styles from './Menu.module.scss';
import classNames from "classnames/bind";
import MenuItem from "~/components/Popper/Menu/MenuItem";
import React, {useState} from "react";
import HeadlessTippy from "@tippyjs/react/headless";

const cx = classNames.bind(styles);

function Menu({children, items}) {

    const [history, setHistory] = useState([{data: items}]);
    const renderItems = function () {
        return items.map((item, index) => {
                return <MenuItem data={item} key={index}/>
            }
        )
    }
    return (
        <HeadlessTippy
            interactive
            delay={[0, 500]}
            offset={[12, 8]}
            placement={"bottom-end"}
            render={attrs => (
                <ul className={cx('list__settingPopup--header')} tabIndex={-1} {...attrs}>
                    {renderItems()}
                </ul>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1))
            }}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;