const rawCommit = process.env.REACT_APP_COMMIT_HASH;

export const COMMIT =
  typeof rawCommit === "string" && rawCommit.length >= 7
    ? rawCommit.substring(0, 7)
    : null;

export const MAX_RECENT_PHILOSOPHERS = 15
