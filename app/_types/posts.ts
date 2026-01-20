import { ObjectId } from "mongodb";

export type PostType = {
  _id: ObjectId;
  author: string;
  authorImage: string;
  category: string;
  date: Date;
  excerpt: string | null;
  imageFolder: boolean;
  slug: string;
  title: string;
};
