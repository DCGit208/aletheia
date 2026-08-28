export const LOCALES = ["en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export const CONTENT_STATUSES = ["draft", "review", "published", "archived"] as const;
export type ContentStatus = (typeof CONTENT_STATUSES)[number];

export const ACCESS_LEVELS = ["public", "free", "entitled", "private"] as const;
export type AccessLevel = (typeof ACCESS_LEVELS)[number];

export const USER_ROLES = [
  "guest",
  "member",
  "student",
  "author",
  "contributor",
  "moderator",
  "administrator",
] as const;
export type UserRole = (typeof USER_ROLES)[number];

export const COMMUNITY_ROLES = ["member", "contributor", "moderator", "administrator"] as const;
export type CommunityRole = (typeof COMMUNITY_ROLES)[number];

export const DIFFICULTIES = ["introductory", "intermediate", "advanced"] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];

export const ENTITLEMENT_SOURCES = [
  "purchase",
  "subscription",
  "membership",
  "enrollment",
  "administrator_grant",
  "promotional",
  "scholarship",
] as const;
export type EntitlementSource = (typeof ENTITLEMENT_SOURCES)[number];

export const PRODUCT_KINDS = ["book", "course", "publication", "resource", "bundle"] as const;
export type ProductKind = (typeof PRODUCT_KINDS)[number];

export type ContentKind = "course" | "path" | "book" | "journal" | "article" | "community" | "topic" | "product";

export interface AuthorRef {
  id: string;
  displayName: string;
}

export interface Author {
  id: string;
  displayName: string;
  title?: string;
  biography: string;
  photoUrl?: string;
  publicationIds: string[];
  bookIds: string[];
  articleIds: string[];
  courseIds: string[];
}

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  authors: AuthorRef[];
  contributors: AuthorRef[];
  publisher: string;
  publishedAt?: string;
  isbn?: string;
  language: Locale;
  edition?: string;
  categories: string[];
  tags: string[];
  coverTone: string;
  coverImage?: string;
  status: ContentStatus;
  accessLevel: AccessLevel;
  previewChapterIds: string[];
  productId?: string;
  chapterCount: number;
}

export interface BookChapter {
  id: string;
  bookId: string;
  number: number;
  title: string;
  body: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  instructor: AuthorRef;
  category: string;
  difficulty: Difficulty;
  durationMinutes: number;
  coverTone: string;
  coverImage?: string;
  status: ContentStatus;
  accessLevel: AccessLevel;
  productId?: string;
  learningPathIds: string[];
  prerequisiteCourseIds: string[];
  certificateEligible: boolean;
  moduleCount: number;
  lessonCount: number;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  courseIds: string[];
  coverTone: string;
  status: ContentStatus;
  estimatedHours: number;
}

export interface CourseModule {
  id: string;
  courseId: string;
  number: number;
  title: string;
  description: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  moduleId: string;
  number: number;
  title: string;
  body: string;
  durationMinutes: number;
  resourceIds: string[];
}

export interface Journal {
  id: string;
  title: string;
  description: string;
  editor: AuthorRef;
  frequency: string;
  coverTone: string;
  status: ContentStatus;
  accessLevel: AccessLevel;
  language: Locale;
}

export interface JournalIssue {
  id: string;
  journalId: string;
  number: number;
  title: string;
  publishedAt: string;
  status: ContentStatus;
  accessLevel: AccessLevel;
  articleIds: string[];
}

export interface Article {
  id: string;
  journalId: string;
  issueId: string;
  title: string;
  abstract: string;
  body: string;
  authors: AuthorRef[];
  categories: string[];
  tags: string[];
  status: ContentStatus;
  accessLevel: AccessLevel;
  publishedAt: string;
}

export interface Community {
  id: string;
  title: string;
  description: string;
  status: ContentStatus;
  memberCount: number;
}

export interface Board {
  id: string;
  communityId: string;
  title: string;
  description: string;
  topicCount: number;
}

export interface Topic {
  id: string;
  communityId: string;
  boardId: string;
  title: string;
  excerpt: string;
  authorName: string;
  replyCount: number;
  pinned: boolean;
  locked: boolean;
  status: ContentStatus;
  updatedAt: string;
}

export interface Post {
  id: string;
  topicId: string;
  authorName: string;
  body: string;
  createdAt: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  kind: ProductKind;
  contentId?: string;
  includedContentIds?: string[];
  priceCents: number;
  compareAtCents?: number;
  currency: "USD";
  status: ContentStatus;
  coverTone: string;
  coverImage?: string;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  status: ContentStatus;
  important: boolean;
}

export interface Entitlement {
  id: string;
  userId: string;
  contentKind: "book" | "course" | "journal" | "article";
  contentId: string;
  source: EntitlementSource;
  grantedAt: string;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  startedAt: string;
  completedLessonIds: string[];
}

export interface ReadingProgress {
  userId: string;
  bookId: string;
  chapterId: string;
  percent: number;
  updatedAt: string;
}

export interface Bookmark {
  id: string;
  userId: string;
  kind: ContentKind;
  targetId: string;
  label: string;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  productIds: string[];
  totalCents: number;
  currency: "USD";
  status: "pending" | "paid" | "failed" | "refunded";
  createdAt: string;
}

export interface HomeComposition {
  featuredCourseIds: string[];
  featuredBookIds: string[];
  featuredJournalIds: string[];
  announcementIds: string[];
  featuredProductIds: string[];
  featuredTopicIds: string[];
}

export interface SearchResult {
  id: string;
  kind: ContentKind;
  title: string;
  subtitle?: string;
  href: string;
}

export interface CatalogSnapshot {
  authors: Author[];
  books: Book[];
  chapters: BookChapter[];
  courses: Course[];
  paths: LearningPath[];
  modules: CourseModule[];
  lessons: Lesson[];
  journals: Journal[];
  issues: JournalIssue[];
  articles: Article[];
  communities: Community[];
  boards: Board[];
  topics: Topic[];
  posts: Post[];
  products: Product[];
  announcements: Announcement[];
  home: HomeComposition;
}
