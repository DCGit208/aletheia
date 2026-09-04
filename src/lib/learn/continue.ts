import { getCourse, listLessons } from "@/lib/data/repository";
import type { Enrollment, Lesson } from "@/lib/data/types";

export function nextLessonForCourse(
  courseId: string,
  enrollment?: Enrollment | null,
): Lesson | null {
  const lessons = listLessons(courseId);
  if (lessons.length === 0) return null;
  const done = new Set(enrollment?.completedLessonIds ?? []);
  return lessons.find((lesson) => !done.has(lesson.id)) ?? lessons[0] ?? null;
}

export function courseProgressPercent(courseId: string, enrollment?: Enrollment | null): number {
  const lessons = listLessons(courseId);
  if (lessons.length === 0) return 0;
  const done = enrollment?.completedLessonIds.length ?? 0;
  return Math.round((done / lessons.length) * 100);
}

export function lessonHref(courseId: string, lessonId: string): string {
  return `/learn/courses/${courseId}/lessons/${lessonId}`;
}

export function resumeCourseHref(courseId: string, enrollment?: Enrollment | null): string {
  const next = nextLessonForCourse(courseId, enrollment);
  if (!next) return `/learn/courses/${courseId}`;
  return lessonHref(courseId, next.id);
}

export function foundationCourseIndex(courseId: string): number {
  const order = [
    "course-fs-repentance",
    "course-fs-faith",
    "course-fs-baptisms",
    "course-fs-hands",
    "course-fs-resurrection",
    "course-fs-judgment",
  ];
  return order.indexOf(courseId);
}

export function describeEnrollment(enrollment: Enrollment): string {
  const course = getCourse(enrollment.courseId);
  const percent = courseProgressPercent(enrollment.courseId, enrollment);
  return course ? `${course.title} · ${percent}%` : enrollment.courseId;
}
