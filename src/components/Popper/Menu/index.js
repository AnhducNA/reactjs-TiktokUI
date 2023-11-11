import styles from './Menu.module.scss';
import classNames from "classnames/bind";
import {Wrapper as PopperWrapper} from "~/components/Popper";
import Tippy from "@tippyjs/react";
import MenuItem from "~/components/Popper/Menu/MenuItem";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleHalfStroke, faCircleQuestion, faLanguage} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Menu({children, items}) {

    const renderItems = function () {
        return items.map((item) => {
                return <MenuItem data={item}/>
            }
        )
    }
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement={"bottom-end"}
            render={attrs => (
                <ul className={cx('list__settingPopup--header')} tabIndex={-1} {...attrs}>
                    {renderItems()}
                </ul>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;