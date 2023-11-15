import React from "react";
import styles from './Button.module.scss';
import classNames from "classnames/bind";
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
                    children,
                    href, to,
                    text = false,
                    primary = false, danger = false, dark = false,
                    outline_danger = false,
                    disabled = false,
                    className,
                    leftIcon, rightIcon,
                    onClick,
                    ...passProps
                }) {
    const classes = cx(
        ['wrapper',
            {
                [className]: className,
                text,
                primary, dark, danger,
                outline_danger,
                disabled
            }
        ]
    );
    let Tag = 'button';
    const props = {
        onClick, ...passProps
    };

    // set Tag
    if (href) {
        Tag = "a";
    } else if (to) {
        Tag = Link;
    } else {
        Tag = "button";
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] == 'function') {
                delete props[key];
            }
        })
    }
    return (
        <Tag className={classes} href={href}>
            {(leftIcon) ? <span className={cx('spanIcon')}>{leftIcon}</span> : ''}
            <span className={cx('spanText__title')}>{children}</span>
            {(rightIcon) ? <span className={cx('spanIcon')}>{rightIcon}</span> : ''}
        </Tag>
    );
}

export default Button;