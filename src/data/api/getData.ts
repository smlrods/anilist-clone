const getData = async (query: string, variables: any) => {
  // Define the config we'll need for our API request
  const url = 'https:graphql.anilist.co',
        options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query: query,
            variables: variables
          })
  }

  const data = await fetch(url, options);
  return data.json();
}

export default getData;
