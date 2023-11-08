import styles from './Header.module.scss';
import classNames from "classnames/bind";
import images from "~/assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faMessage,
    faPaperPlane,
    faPlus,
    faSpinner
} from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('container__header')}>
            <div className={cx('container__header--left')}>
                <a href="/">
                    <img src={images.logo} width="118" height="42" alt="TikTok"/>
                </a>
            </div>
            <div className={cx('container__header--center')}>
                <form action="" method="get" className={cx('container__search')}>
                    <input type="text" placeholder="Search" className={cx('input__search')}/>
                    <div className={cx('icon__wrapper')}>
                        {/*<FontAwesomeIcon icon={faSpinner}/>*/}
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </div>
                    <span className={cx('span__splitter')}></span>
                    <button type="submit" className={cx('button__search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </form>
            </div>
            <div className={cx('container__header--right')}>
                <div className={cx('container__upload')}>
                    <FontAwesomeIcon icon={faPlus} className={cx('icon__plus--style')}/>
                    <span className={cx('spanText__upload')}>Upload</span>
                </div>
                <div className={cx('iconContainer__message')}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <div className={cx('container__inbox--header')}>
                    <FontAwesomeIcon icon={faMessage} />
                </div>
                <div id={cx('header-more-menu-icon')}>
                    <div className={cx('container__profile')}>

                    </div>
                </div>
            </div>
        </header>);
}

export default Header;