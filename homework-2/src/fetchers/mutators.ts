export async function mutator<T>(url: string, { arg }: { arg: T }) {
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

    const data = await response.json();
    console.log(data)

    return data;
}