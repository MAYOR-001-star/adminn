"use client"

import styles from "./search.module.css"
import {MdSearch} from "react-icons/md";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";

const Search = ({placeholder}) => {
    const {replace} = useRouter();
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("page", "1")
        e.target.value ?
            e.target.value.length > 2 && params.set("q", e.target.value) :
            params.delete("q")
        replace(`${pathname}?${params.toString()}`)
    },300)

    return (
        <div className={styles.container}>
            <MdSearch/>
            <input
                type="text"
                placeholder={placeholder}
                className={styles.input}
                onChange={handleSearch}
            />
        </div>
    )
}

export default Search