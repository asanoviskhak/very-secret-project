'use client';

import { getUniqueYearsFromPosts } from '@/helpers/posts';
import { addModifier } from '@/helpers/styles';
import { Post } from '@/types/Posts';
import React, { useEffect, useRef, useState } from 'react';
import styles from './timeline.module.scss';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { createQueryString } from '@/helpers/url';

const getPreviousYears = () => {
  const currentYear = new Date().getFullYear();
  const previousYears = [];

  for (let i = currentYear - 6; i <= currentYear - 1; i++) {
    previousYears.push(i);
  }

  return previousYears;
};

const getNextYears = () => {
  const currentYear = new Date().getFullYear();
  const nextYears = [];

  for (let i = currentYear + 1; i <= currentYear + 6; i++) {
    nextYears.push(i);
  }

  return nextYears;
};

const Timeline = ({ posts }: { posts: Post[] }) => {
  const [yearList, setYearList] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(() => {
    return new Date().getFullYear();
  });
  const yearListRef = useRef<HTMLDivElement>(null);
  const yearItemRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (posts) {
      setYearList(getUniqueYearsFromPosts(posts));
    }
  }, [posts]);

  const setSearchQuery = (year: number) => {
    const searchparams = createQueryString({
      searchParams,
      name: 'year',
      value: year,
    });
    router.push(`${pathname}?${searchparams}`);
  };
  useEffect(() => {
    if (selectedYear) {
      setSearchQuery(selectedYear);
    }
  }, [selectedYear]);

  useEffect(() => {
    if (yearListRef.current && yearItemRef.current) {
      const yearListWidth = yearListRef.current.offsetWidth;
      const yearItemWidth = yearItemRef.current.offsetWidth;
      const yearItemMargin = 16;
      const yearItemTotalWidth = yearItemWidth + yearItemMargin;
      const yearListTotalWidth = yearItemTotalWidth * yearList.length;
      const yearListOffset = yearListTotalWidth - yearListWidth;

      yearListRef.current.scrollTo(yearListOffset, 0);
    }
  }, [yearList, yearListRef, yearItemRef]);

  return (
    <section className={styles.year_list}>
      {getPreviousYears().map((year) => (
        <button
          className={addModifier(styles.year_item, styles.year_item__inactive)}
          key={year}
          // disabled
          onClick={() => {
            setSelectedYear(year);
            // setSearchQuery(year);
          }}
        >
          <h3>{year}</h3>
        </button>
      ))}
      {yearList.map((year) => (
        <button
          className={
            selectedYear === year
              ? addModifier(styles.year_item, styles.year_item__active)
              : styles.year_item
          }
          key={year}
          onClick={() => {
            setSelectedYear(year);
            // setSearchQuery(year);
          }}
          ref={selectedYear === year ? yearItemRef : null}
        >
          <h3>{year}</h3>
        </button>
      ))}
      {getNextYears().map((year) => (
        <button
          className={addModifier(styles.year_item, styles.year_item__inactive)}
          key={year}
          disabled
        >
          <h3>{year}</h3>
        </button>
      ))}
    </section>
  );
};

export default Timeline;
