const ApiService = async (url: string, method: string, token?: string, body?: string) => {
    try {
        const result = await fetch(url, {
            method,
            body,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        });
        const response = await result.json();
        return response;
    }
    catch (err) {
        console.log("Error in ApiService call: ", err);
        return null;
    }
}

export { ApiService };