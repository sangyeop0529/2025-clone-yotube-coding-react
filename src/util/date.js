export function getRelativeTime(date) {
  const now = new Date();
  const published = new Date(date);
  const diffInMs = now - published;

  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears > 0) return `${diffInYears}년 전`;
  if (diffInMonths > 0) return `${diffInMonths}달 전`;
  if (diffInDays > 0) return `${diffInDays}일 전`;

  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  if (diffInHours > 0) return `${diffInHours}시간 전`;

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  if (diffInMinutes > 0) return `${diffInMinutes}분 전`;

  return "방금 전";
}
