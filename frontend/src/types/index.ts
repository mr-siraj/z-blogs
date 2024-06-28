export interface UserRegisterTypes {
  username: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface UserLoginTypes {
  email: string;
  password: string;
}
export interface UserUpdateTypes {
  username: string;
  fullName: string;
  email: string;
  role: "ADMIN" | "MODERATOR" | "USER";
}
export interface UserDataTypes {
  uid: string;
  username: string;
  fullName: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
export interface BlogDataTypes {
  blogId: string;
  blogTitle: string;
  blogSlug: string;
  blogDescription: string;
  blogThumbnail: string;
  blogAuthor: string;
  blogThumbnailAuthor: string;
  isPublic: true | false;
  createdAt: string;
  updatedAt: string;
}
export interface BlogTypes {
  success?: boolean;
  statusCode?: number;
  message?: string;
  optMessage?: string | null;
  data?: BlogDataTypes[];
}
export interface PaginationTypes {
  currentPage: number;
  totalPages: number;
  totalPublicBlogs: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
export interface PublicBlogDataTypes {
  blogs: BlogDataTypes[];
  pagination: PaginationTypes;
}
export interface PublicBLogTypes {
  success: boolean;
  statusCode: number;
  message: string;
  optMessage: string | null;
  data: PublicBlogDataTypes;
}
export interface CurrentUserTypes {
  uid: string;
  username: string;
  email: string;
  fullName: string;
  role: "ADMIN" | "MODERATOR" | "USER";
}
