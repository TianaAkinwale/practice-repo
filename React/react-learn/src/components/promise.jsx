// Generic function to simulate fetching data with a delay
export function simulateFetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newData = 'New data fetched asynchronously';
            resolve(newData);
        }, 2000); // Simulate delay of 2 seconds
    });
}

/* // Generic function to fetch data from a URL
export function fetchDataFromUrl(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        });
} */
// Generic function to fetch data from a URL
export async function fetchDataFromUrl(url) {
    const response = await fetch(url);
    if (!response.ok) {
        console.error('Failed to fetch data from url:', response.statusText);
        throw new Error('Failed to fetch data in fetchDataFromUrl');
    }
    const jsonData = await response.json();
    console.log('Data passed to fetchData function');
    return jsonData.slip.advice
}

/* const jsonData = await response.json();
    console.log('Data fetched successfully:', jsonData);
    return jsonData; */
/* useEffect(() => {
        fetchDataFromUrl(weatherApiUrl)
            .then(data => setData2(data.properties.periods[1].shortForecast))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); */
