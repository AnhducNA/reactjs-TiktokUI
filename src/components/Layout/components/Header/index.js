import styles from './Header.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('divHeaderContainer')}>
            <div className={cx('123')}></div>
        </header>
    );
}

export default Header;