import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './Menu.module.scss';
import classNames from "classnames/bind";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";

const cx = classNames.bind(styles);
const Header = ({title, onBack}) => {
    return (
        <header className={cx('header')}>
            <button className={cx('header__btn--back')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <h4 className={cx('header__title')}>{title}</h4>
        </header>
    );
};

export default Header;