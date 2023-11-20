import styles from './Menu.module.scss';
import classNames from "classnames/bind";
import MenuItem from "~/components/Popper/Menu/MenuItem";
import React, {useState} from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import {Wrapper as PopperWrapper} from "~/components/Popper";
import Header from "./Header";

const cx = classNames.bind(styles);

const defaultFunction = () => {
};

function Menu({children, items = [], hideOnClick = false, onChange = defaultFunction}) {

    const [history, setHistory] = useState([{data: items}]);
    const current = history[history.length - 1];
    const renderItems = function () {
        return current.data.map((item, index) => {
                const isParent = !!item.children;
                return (
                    <MenuItem
                        key={index}
                        data={item}
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                            } else {
                                onChange(item);
                            }
                        }}
                    />
                )
            }
        )
    }
    return (
        <HeadlessTippy
            interactive
            delay={[0, 500]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement={"bottom-end"}
            render={(attrs) => (
                <ul className={cx('list__settingPopup--header')} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
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