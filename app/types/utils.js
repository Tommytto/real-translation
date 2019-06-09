export type $$EntityObject<GItem> = {
    [key: string]: GItem
};

export type $$MergeType<GFirst, GSecond> = {
    ...GFirst,
    ...GSecond
};
