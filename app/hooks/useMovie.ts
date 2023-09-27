import useSWR from "swr";

import fetcher from "../lib/fetcher";


const useMovie = ( id : string) => useSWR(
    "/api/movies/" + id,
    fetcher,
    {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    }
);

export default useMovie;