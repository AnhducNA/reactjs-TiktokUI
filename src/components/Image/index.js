import styles from './Image.module.scss';
import classNames from "classnames";
import React from "react";

const Image = React.forwardRef(
    ({src, alt, className, ...props}, ref) => {
        return (
            <img
                className={classNames(styles.wrapper, className)}
                src={src}
                alt={alt}
                ref={ref}
                {...props}
            />
        )
    }
)

export default Image;