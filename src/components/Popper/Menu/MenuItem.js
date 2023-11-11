
import styles from './Menu.module.scss';
import classNames from "classnames/bind";
import Button from "~/components/Button";

const cx = classNames.bind(styles);
function MenuItem ({data}){
    return (
        <li className={cx('item__wrapper')}>
            <Button
                className='btn__setting--header' text
                leftIcon={data.leftIcon}
                rightIcon={data.rightIcon}
                to={data.to}
            >{data.title}</Button>
        </li>
    )
}

export default MenuItem;