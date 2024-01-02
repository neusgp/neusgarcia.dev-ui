import { PostContent } from "./types";

export const getPostsGridColumns = (data: PostContent[]) => {

    const isMultipleOfTwo = (i: number) => (i + 1) % 2 === 0;
    const isNotMultipleOftwo = (i: number) => (i + 1) % 2 !== 0;

    const firstCol = getFilteredPosts(data, isNotMultipleOftwo, isNotMultipleOftwo);
    const secondCol = getFilteredPosts(data, isMultipleOfTwo, isNotMultipleOftwo);
    const thirdCol = getFilteredPosts(data, isNotMultipleOftwo, isMultipleOfTwo);
    const fourthCol = getFilteredPosts(data, isMultipleOfTwo, isMultipleOfTwo);

    return { firstCol, secondCol, thirdCol, fourthCol };
}

const getFilteredPosts = (data: PostContent[], firstFilter: (i: number) => boolean, secondFilter: (i: number) => boolean) => {
    return data.filter((_post, i) =>
        firstFilter(i))
        .filter((_post, i) =>
            secondFilter(i))
}

