export async function mutator(url: string, { arg }: { arg: string }) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(arg),
    });

    if(!response.ok) {
        throw new Error(`Failed t mutate on ${url}`);
    }

    return await response.json();
}