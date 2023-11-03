import styles from './Sidebar.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('div_scroll--container')}>
            sidebar
        </div>
    );
}

export default Sidebar;