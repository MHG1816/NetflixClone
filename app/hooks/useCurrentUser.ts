import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useCurrentUser = () => useSWR("/api/user", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnMount: false
});

export default useCurrentUser;