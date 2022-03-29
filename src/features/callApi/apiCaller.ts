export async function fetchApi(): Promise<{ helloTo: string }> {
  const response = await fetch("/api/hello", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();

  return result;
}
