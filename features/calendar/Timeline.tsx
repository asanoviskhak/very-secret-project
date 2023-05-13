'use client';

import { getUniqueYearsFromPosts } from '@/helpers/posts';
import { addModifier } from '@/helpers/styles';
import { Post } from '@/types/Posts';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Timeline = ({ posts }: { posts: Post[] }) => {
  const [yearList, setYearList] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(() => {
    //// set to currentt year
    return new Date().getFullYear();
  });

  useEffect(() => {
    if (posts) {
      setYearList(getUniqueYearsFromPosts(posts));
    }
  }, [posts]);
  console.log(yearList);
  console.log(selectedYear);
  return (
    <section className={styles.year_list}>
      {yearList.map((year) => (
        <button
          className={addModifier(
            styles.year_item,
            selectedYear === year ? styles.year_item__active : undefined
          )}
          key={year}
          onClick={() => setSelectedYear(year)}
        >
          {year}
        </button>
      ))}
    </section>
  );
};

export default Timeline;
