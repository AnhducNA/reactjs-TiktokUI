import styles from './Menu.module.scss';
import classNames from "classnames/bind";
import Button from "~/components/Button";

const cx = classNames.bind(styles);
function MenuItem({data, onClick}) {
    const separate = {separate: data.separate}
    return (
        <li className={cx('item__menu', separate)}>
            <Button
                className={cx('btn__setting--header')} text
                leftIcon={data.leftIcon}
                rightIcon={data.rightIcon}
                to={data.to}
                onClick={onClick}
            >{data.title}</Button>
        </li>
    )
}

export default MenuItem;