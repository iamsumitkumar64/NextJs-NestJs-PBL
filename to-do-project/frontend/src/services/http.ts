const ApiCall = async (url: string, method: string, token?: string, body?: string) => {
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
    catch (e) {
        console.log("Error in api call: ", e);
        return null;
    }
}

export { ApiCall };