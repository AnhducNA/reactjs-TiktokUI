import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container__body')}>
                <Sidebar/>
                <div className={cx('container__body--main')}>{children}</div>
            </div>
        </div>
    );
}

export default  DefaultLayout;