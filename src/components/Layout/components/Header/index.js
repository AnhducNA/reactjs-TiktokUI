import styles from './Header.module.scss';
import classNames from "classnames/bind";
import images from "~/assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faCircleHalfStroke,
    faCircleQuestion,
    faEllipsisVertical, faGear,
    faLanguage,
    faPlus, faSignOut,
    faSpinner, faUser
} from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from "@tippyjs/react/headless";
import {Wrapper as PopperWrapper} from "~/components/Popper";
import SearchItem from "~/components/SearchItem";
import React from "react";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Tippy from "@tippyjs/react/headless";
import Image from "~/components/Image";
import {ClearSearchIcon, InboxIcon, MessageIcon, SearchIcon, UploadIcon} from "~/components/Icons";

const cx = classNames.bind(styles);

function Header() {

    const ref = React.createRef();
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
                            <ClearSearchIcon/>
                        </div>
                        <span className={cx('span__splitter')}></span>
                        <button type="submit" className={cx('button__search')}>
                            <SearchIcon/>
                        </button>
                    </form>
                </HeadlessTippy>
            </div>
            <div className={cx('container__header--right')}>
                {(currentUser) ? (
                    <>
                        <Tippy
                            render={attrs => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    Upload
                                </div>
                            )}
                        >
                            <span>
                                <Button
                                    dark={true}
                                    href="#"
                                    leftIcon={<UploadIcon/>}
                                >Upload</Button>
                            </span>
                        </Tippy>
                        <Tippy
                            content="message"
                            placement="bottom"
                            render={attrs => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    Message
                                </div>
                            )}
                            delay={[0, 200]}
                        >
                            <div className={cx('container__message')}>
                                <MessageIcon/>
                            </div>
                        </Tippy>
                        <Tippy
                            content="message"
                            placement="bottom"
                            render={attrs => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    Inbox
                                </div>
                            )}
                            delay={[0, 200]}
                        >
                            <div className={cx('container__inbox--header')}>
                                <span>
                                    <InboxIcon/>
                                </span>
                                <sup className={cx('subBadge')}>37</sup>
                            </div>
                        </Tippy>
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
                {/* render setting when hover */}
                <Menu items={(USER_MENUS) ? (USER_MENUS) : (MENU_ITEMS)}>
                    {
                        (currentUser) ? (
                            <Image className={cx('container__profile')}
                                   src={images.user_avatar}
                                   alt={images.user_avatar}
                                   ref={ref}
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