// API endpoints feature
export const apiEndpoints = {
  users: "/api/v1/users",
  posts: "/api/v1/posts"
};
export function fetchData(endpoint) {
  return fetch(endpoint).then(res => res.json());
}
