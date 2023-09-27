import useSWR from "swr";
import fetcher from "../lib/fetcher";

/**
 * A custom hook that fetches data 
 * from the "/api/favorites" endpoint 
 * using the useSWR hook. 
 * It returns the fetched data, 
 * any error that occurred during the fetch, 
 * a loading state, 
 * and a function to mutate the data.
 */
const useFavorites = () => useSWR("/api/favorite", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
});

export default useFavorites;