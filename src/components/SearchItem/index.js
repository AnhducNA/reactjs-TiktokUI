import classNames from "classnames/bind";
import styles from './SearchItem.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis, faFlag, faHeartCrack} from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";
import Image from "~/components/Image";
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

function SearchItem({data}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('liContainer__searchItem')}>
            <span className={cx('span__avatar')}>
                <Image className={cx('img__avatar')}
                       src={data.avatar}
                       alt={data.full_name}/>
            </span>
            <div className={cx('div__searchItem--content')}>
                <div className={cx('div__searchUser--info')}>
                    <h4 className={cx('title__item')}>{data.nickname}</h4>
                    <p className={cx('p__item--name')}>{data.full_name}</p>
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
        </Link>

    )
        ;
}

export default SearchItem;