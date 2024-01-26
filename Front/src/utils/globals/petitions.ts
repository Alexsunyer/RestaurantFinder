export const getDataApiJSON = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
  const result = await response.json();
  return result;
};
