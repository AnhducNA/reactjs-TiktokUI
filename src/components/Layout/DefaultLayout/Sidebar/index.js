import styles from './Sidebar.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('container__sidebar')}>
            sidebar
        </div>
    );
}

export default Sidebar;