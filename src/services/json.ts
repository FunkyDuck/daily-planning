export async function fetchJson() {

  const response = await fetch('/src/assets/planning.json')

  if(!response.ok) {
    throw new Error(`Error! : ${response.status}`);
  }

  return response.json()
}
