import React, {useEffect, useState} from 'react';
import styles from './Search.module.scss';
import HeadlessTippy from "@tippyjs/react";
import {Wrapper as PopperWrapper} from "~/components/Popper";
import SearchItem from "~/components/SearchItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {ClearSearchIcon, SearchIcon} from "~/components/Icons";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

const cx = classNames.bind(styles)
const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = React.createRef();

    useEffect(() => {
        if (searchValue.trim().length > 0) {
            setLoading(true);
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
                .then(response => response.json())
                .then((response) => {
                    setSearchResult(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false)
                });
        }
    }, [searchValue]);

    const handleClearInputSearch = () => {
        setSearchValue('');
        setShowResult(false);
        setSearchResult([]);
        inputRef.current.focus();
    }

    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <ul id="header-search-results" className={cx('container__searchResult--header')}
                    tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('title__suggestAccount')}>Accounts</h4>
                        {!!searchResult && searchResult.map((result, index) => (
                            <SearchItem data={result} key={index}/>
                        ))}
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
                        )
                    }
                    {
                        !!loading && (
                            <i className={cx('icon__wrapper--loading')}>
                                <FontAwesomeIcon icon={faSpinner}/>
                            </i>
                        )
                    }
                </div>
                <span className={cx('span__splitter')}></span>
                <button type="submit" className={cx('button__search')}>
                    <SearchIcon/>
                </button>
            </form>
        </Tippy>
    );
};

export default Search;