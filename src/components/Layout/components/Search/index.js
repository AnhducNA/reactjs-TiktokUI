import React, {useEffect, useState} from 'react';
import styles from './Search.module.scss';
import {Wrapper as PopperWrapper} from "~/components/Popper";
import SearchItem from "~/components/SearchItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {ClearSearchIcon, SearchIcon} from "~/components/Icons";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import useDebounce from "~/hooks";
import * as searchServices from "~/apiServices/searchServices";

const cx = classNames.bind(styles)
const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = React.createRef();

    useEffect(() => {
        if (debounced.trim().length > 0) {
            const fetchApi = async () => {
                setLoading(true);
                const result = await searchServices.search(debounced);
                setSearchResult(result);
                setLoading(false);
            };
            fetchApi();
        }
    }, [debounced]);

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