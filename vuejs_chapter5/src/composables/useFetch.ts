import { ref, type Ref, type UnwrapRef } from "vue";

type FetchResponse<T> = {
    data: Ref<UnwrapRef<T> | null>;
    error: Ref<UnwrapRef<Error> | null>;
    loading: Ref<boolean>;
};

export function useFetch<T>(url: string): FetchResponse<T> {
    const data = ref<T | null>(null) as Ref<UnwrapRef<T> | null>;
    const loading = ref<boolean>(false);
    const error = ref<Error | null>(null) as Ref<UnwrapRef<Error> | null>;

    const fetchData = async () => {
        try {
            loading.value = true;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Failed to fetch data for ${url}`);
            }

            // const json = (await response.json()) as T;
            // data.value = json as UnwrapRef<T>;
            data.value = await response.json();
        } catch (err: any) {
            // error.value = err as UnwrapRef<Error>;
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    fetchData();

    return { data, error, loading };
}
