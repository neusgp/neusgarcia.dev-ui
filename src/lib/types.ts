export type PostContent = {
  id: number;
  attributes: PostAttributes;
};

export type PostAttributes = {
  author: string;
  body: string;
  createdAt: string;
  date: string;
  imageUrl: string;
  location: string;
  publishedAt: string;
  title: string;
  updatedAt: string;
};

export type MenuLink = {
  label: string;
  path: string;
};