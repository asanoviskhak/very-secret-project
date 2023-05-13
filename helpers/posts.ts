import { Post } from "@/types/Posts";
import moment from 'moment';

export const getUniqueYearsFromPosts = (posts: Post[]) => {
    const years = posts.map((post: Post) => {
        const year = moment(post.created_at!).get('year');
        console.log(year);
        return year;
    });
    const sortedYears = years.sort((a, b) => b - a);
    const settedYears = new Set(sortedYears);
    return [...settedYears];
}