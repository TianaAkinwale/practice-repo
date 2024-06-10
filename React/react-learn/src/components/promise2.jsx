import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './../app'
import { simulateFetchData, fetchDataFromUrl } from './promise';

const AsyncStateUpdate = () => {
    const [data, setData] = useState('just a random data before the new one comes in');
    const [data2, setData2] = useState('hmm... i wonder what the advice says');
    const [error, setError] = useState(null);
    const [error2, setError2] = useState(null);
    const url = "https://api.adviceslip.com/advice"

    const { theme, toggleTheme } = useContext(ThemeContext);

    async function handleClick() {
        try {
            const result = await simulateFetchData();
            setData(result);
            console.log('Data fetched successfully:', result);
        } catch (error) {
            console.error('Error fetching data in simulateFetchData:', error);
            setError(error.message)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            console.log('Starting to fetch advice data...');
            try {
                console.log('Fetching data from:', url);
                const data2 = await fetchDataFromUrl(url);
                console.log('advice data fetched successfully:', data2);
                setData2(data2);
            } catch (error2) {
                console.error('Error fetching data in advice sect:', error2);
                setError2(error2.message)
            }
        }
        fetchData();
    }, []);

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}
            className="bg-violet-700 p-[30px] m-3">
            <p className="bg-blue-400 p-[10px] shadow-md">Current Theme: {theme}</p>
            <button className="bg-blue-800 px-[30px] mb-[10px] text-white"
                onClick={toggleTheme}>Toggle Theme</button>
            <div className="bg-violet-400 p-[10px] mb-[10px] shadow-md">
                <h1>Async State Update</h1>
                <button className="bg-violet-800 px-[30px] m-2 text-white"
                    onClick={handleClick}>Fetch Data</button>
                <p>{data}</p>
                <p>{error}</p>
            </div>
            <div className="bg-violet-400 p-[10px] mt-[10px] shadow-md">
                <h1>Advice Sect</h1>
                <p>{data2}</p>
                <p>{error2}</p>
            </div>

        </div>
    );
}

export default AsyncStateUpdate;
