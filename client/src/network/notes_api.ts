async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);

  if (response.ok) {
    return response;
  }
  elsr{
    const errorBody=await response.json()
    const errorMessage=
  }
}
