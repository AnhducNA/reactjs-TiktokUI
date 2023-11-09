import classNames from "classnames/bind";
import styles from './SearchItem.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis, faFlag, faHeartCrack} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function SearchItem() {
    return (
        <li className={cx('liContainer__searchItem')}>
            <span className={cx('span__avatar')}>
                <img className={cx('img__avatar')}
                     src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/9a443831ec95ae0927c9ab19e24798fa.jpeg?x-expires=1699592400&x-signature=F5WFv%2BU3yazHvTCtQWCjqrnOcWc%3D"
                     alt=""/>
            </span>
            <div className={cx('div__searchItem--content')}>
                <div className={cx('div__searchUser--info')}>
                    <h4 className={cx('title__item')}>Duc521</h4>
                    <p className={cx('p__item--name')}>Le Anh Duc</p>
                </div>
                <div className={cx('container__action')}>
                    <FontAwesomeIcon icon={faEllipsis}/>
                    <div className={cx('container__popup')}>
                        <p className={cx('item__action')}>
                            <FontAwesomeIcon icon={faFlag}/>
                            <span className={cx('text__action')}>Report</span>
                        </p>
                        <p className={cx('item__action')}>
                            <FontAwesomeIcon icon={faHeartCrack}/>
                            <span className={cx('text__action')}>Mark as irrelevant</span>
                        </p>
                    </div>
                </div>
            </div>
        </li>

    );
}

export default SearchItem;