import { create } from 'zustand'
import { useQuery } from '@tanstack/react-query';

export const useMenu = create(function (set) {
    return {
        menu: [],
        loading: false,

        getData: () => {
            set((state) => ({ ...state, loading: true }));
            fetch("https://api.jsonbin.io/v3/b/66cd654cacd3cb34a87a0bab")
                .then((r) => r.json())
                .then((r) => {
                    set(() => {
                        return { menu: [...r.record], loading: false };
                    });
                });
        }
    };
});

export function useMenuReactQuery() {
    const query = useQuery({
        queryKey: ["menu"],
        queryFn: () => {
            return fetch("https://api.jsonbin.io/v3/b/66cd654cacd3cb34a87a0bab")
                .then((r) => r.json())
                .then((r) => r.record);
        },
    });
    return query;
}