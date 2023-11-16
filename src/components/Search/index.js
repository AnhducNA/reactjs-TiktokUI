import React, {useEffect, useState} from 'react';
import styles from './Search.module.scss';
import HeadlessTippy from "@tippyjs/react";
import {Wrapper as PopperWrapper} from "~/components/Popper";
import SearchItem from "~/components/SearchItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {ClearSearchIcon, SearchIcon} from "~/components/Icons";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 2);
    }, []);

    const inputRef = React.createRef();

    const handleClearInputSearch = () => {
        setSearchValue('');
        setShowResult(false);
        setSearchResult([]);
        inputRef.current.focus();
    }

    return (
        <HeadlessTippy
            interactive={true}
            visible={showResult && searchResult.length>0}
            render={attrs => (
                <ul id="header-search-results" className={cx('container__searchResult--header')}
                    tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('title__suggestAccount')}>Accounts</h4>
                        <SearchItem/>
                        <SearchItem/>
                    </PopperWrapper>
                </ul>
            )}
            onClickOutside={
                () => {
                    setShowResult(false)
                }
            }
        >
            <form action="" method="get" className={cx('container__search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={
                        (e) => {
                            setSearchValue(e.target.value)
                        }
                    }
                    onFocus={
                        () => {
                            setShowResult(true)
                        }
                    }
                    spellCheck={false}
                    placeholder="Search accounts and videos"
                    className={cx('input__search')}
                />
                <div className={cx('icon__wrapper')}>
                    {
                        !!searchValue && (
                            <button className={cx('icon__wrapper--clear')}
                                    onClick={handleClearInputSearch}
                            >
                                <ClearSearchIcon/>
                            </button>
                        )}
                    <FontAwesomeIcon icon={faSpinner}/>
                </div>
                <span className={cx('span__splitter')}></span>
                <button type="submit" className={cx('button__search')}>
                    <SearchIcon/>
                </button>
            </form>
        </HeadlessTippy>
    );
};

export default Search;