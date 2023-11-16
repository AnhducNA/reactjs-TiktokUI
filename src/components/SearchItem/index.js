import classNames from "classnames/bind";
import styles from './SearchItem.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis, faFlag, faHeartCrack} from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function SearchItem() {
    return (
        <li className={cx('liContainer__searchItem')}>
            <span className={cx('span__avatar')}>
                <Image className={cx('img__avatar')}
                     src={images.user_avatar}
                     alt="LAD"/>
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