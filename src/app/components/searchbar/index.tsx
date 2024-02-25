"use client";

import styles from "./index.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconSearch from "../icons/icon-search";

export default function SearchBar() {
  const [keyword, setKeyword] = useState<string>();
  const [packages, setPackages] = useState<[]>();
  useEffect(() => {
    if (keyword && keyword != "" && keyword.length >= 3) {
      fetch(`/api/search?keyword=${keyword}`)
        .then((response) => response.json())
        .then((data) => {
          setPackages(data.packages);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setPackages([]);
    }
  }, [keyword]);

  return (
    <div className={styles["searchbar-wrapper"]}>
      <IconSearch className={styles["search-lens"]} />
      <input
        type="text"
        className={styles.searchbar}
        placeholder="Type atleast 3 characters"
        onChange={(event) => setKeyword(event.target.value)}
      />
      <div className={styles["suggestions"]}>
        {packages &&
          packages.map((item: any) => {
            return (
              <div key={item.id} className={styles.suggestion}>
                <Link href={`/packages/${item.title}`}>
                  <span>{item.title}</span>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
