export async function getData() {
  const res = await fetch (`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/works?populate=*`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
    },
  })

  if(!res.ok){
    throw new Error("Failed to fetch data.")
  }

  return res.json()
}

