import useSWR from "swr";

import fetcher from "../lib/fetcher";


const useMovie = ( id : string) => useSWR(
    id ? "/api/movies/" + id : null,
    fetcher,
    {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    }
);

export default useMovie;