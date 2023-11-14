import styles from './Header.module.scss';
import classNames from "classnames/bind";
import images from "~/assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faCircleHalfStroke,
    faCircleQuestion,
    faCircleXmark,
    faEllipsisVertical, faGear,
    faLanguage,
    faMagnifyingGlass,
    faMessage,
    faPaperPlane,
    faPlus, faSignOut,
    faSpinner, faUser
} from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from "@tippyjs/react/headless";
import {Wrapper as PopperWrapper} from "~/components/Popper";
import SearchItem from "~/components/SearchItem";
import React from "react";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

function Header() {

    const currentUser = true;

    const MENU_ITEMS = [
        {
            leftIcon: <FontAwesomeIcon icon={faLanguage}/>,
            title: 'English'
        },
        {
            leftIcon: <FontAwesomeIcon icon={faCircleQuestion}/>,
            title: 'Feedback and Help',
            to: 'www.facebook.com'
        },
        {
            leftIcon: <FontAwesomeIcon icon={faCircleHalfStroke}/>,
            title: 'Dark Mode',
            rightIcon: <FontAwesomeIcon icon={faLanguage}/>,
        }
    ];
    const USER_MENUS = [
        {
            leftIcon: <FontAwesomeIcon icon={faUser}/>,
            title: 'View Profile'
        }, {
            leftIcon: <FontAwesomeIcon icon={faBookmark}/>,
            title: 'Favorites'
        }, {
            leftIcon: <FontAwesomeIcon icon={faGear}/>,
            title: 'Setting'
        },
        ...MENU_ITEMS,
        {
            leftIcon: <FontAwesomeIcon icon={faSignOut}/>,
            title: 'Log out',
            to: '/logout',
            separate: true
        }
    ];
    return (
        <header className={cx('container__header')}>
            <div className={cx('container__header--left')}>
                <a href="/">
                    <img src={images.logo} width="118" height="42" alt="TikTok"/>
                </a>
            </div>
            <div className={cx('container__header--center')}>
                <HeadlessTippy
                    interactive={true}
                    delay={[0, 500]}
                    render={attrs => (
                        <ul id="header-search-results" className={cx('container__searchResult--header')}
                            tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('title__suggestAccount')}>Accounts</h4>
                                <SearchItem/>
                                <SearchItem/>
                            </PopperWrapper>
                        </ul>
                    )}
                >
                    <form action="" method="get" className={cx('container__search')}>
                        <input type="text" placeholder="Search" className={cx('input__search')}/>
                        <div className={cx('icon__wrapper')}>
                            <FontAwesomeIcon icon={faSpinner}/>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </div>
                        <span className={cx('span__splitter')}></span>
                        <button type="submit" className={cx('button__search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </form>
                </HeadlessTippy>
            </div>
            <div className={cx('container__header--right')}>
                {(currentUser) ? (
                    <>
                        <Button
                            dark={true}
                            href="#"
                            leftIcon={<FontAwesomeIcon icon={faPlus}/>}
                        >Upload</Button>
                        <div className={cx('container__message')}>
                            <FontAwesomeIcon icon={faPaperPlane}/>
                        </div>
                        <div className={cx('container__inbox--header')}>
                        <span>
                            <FontAwesomeIcon icon={faMessage}/>
                        </span>
                            <sup className={cx('subBadge')}>37</sup>
                        </div>
                    </>

                ) : (
                    <>
                        <Button
                            dark={true}
                            href="#"
                            leftIcon={<FontAwesomeIcon icon={faPlus}/>}
                        >Upload</Button>
                        <Button danger={true}>Log in</Button>
                    </>
                )}

                <Menu items={(USER_MENUS) ? (USER_MENUS) : (MENU_ITEMS)}>
                    {
                        (currentUser) ? (
                            <img className={cx('container__profile')}
                                 src={images.user_avatar}
                                 alt={images.user_avatar}
                            />
                        ) : (
                            <i className={cx('iconWrapper__more--header')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}
                                                 className={cx('icon__ellipsisVertical--styled')}/>
                            </i>
                        )
                    }

                </Menu>

            </div>
        </header>);
}

export default Header;