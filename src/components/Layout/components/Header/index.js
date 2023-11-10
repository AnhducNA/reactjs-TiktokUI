import styles from './Header.module.scss';
import classNames from "classnames/bind";
import images from "~/assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleXmark, faEllipsisVertical, faMagnifyingGlass, faMessage, faPaperPlane, faPlus, faSpinner
} from '@fortawesome/free-solid-svg-icons'
import Tippy from "@tippyjs/react";
import {Wrapper} from "~/components/Popper";
import SearchItem from "~/components/SearchItem";
import React from "react";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Header() {

    return (<header className={cx('container__header')}>
        <div className={cx('container__header--left')}>
            <a href="/">
                <img src={images.logo} width="118" height="42" alt="TikTok"/>
            </a>
        </div>
        <div className={cx('container__header--center')}>
            <Tippy
                interactive={true}
                render={attrs => (
                    <ul id="header-search-results" className={cx('container__searchResult--header')}
                        tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <h4 className={cx('title__suggestAccount')}>Accounts</h4>
                            <SearchItem/>
                            <SearchItem/>
                        </Wrapper>
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
            </Tippy>
        </div>
        <div className={cx('container__header--right')}>
            <Button
                className="container__upload"
                text={true}
                href="#"
                leftIcon={<FontAwesomeIcon icon={faPlus}/>}
            >Upload</Button>
            <Button primary={true}>Log in</Button>
            <i className={cx('iconWrapper__more--header')}>
                <FontAwesomeIcon icon={faEllipsisVertical} className={cx('icon__ellipsisVertical--styled')}/>
            </i>
            {/*<div className={cx('container__message')}>*/}
            {/*    <FontAwesomeIcon icon={faPaperPlane}/>*/}
            {/*</div>*/}
            {/*<div className={cx('container__inbox--header')}>*/}
            {/*        <span>*/}
            {/*            <FontAwesomeIcon icon={faMessage}/>*/}
            {/*        </span>*/}
            {/*    <sup className={cx('subBadge')}>37</sup>*/}
            {/*</div>*/}
            {/*<div id={cx('header-more-menu-icon')}>*/}
            {/*    <div className={cx('container__profile')}>*/}

            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </header>);
}

export default Header;