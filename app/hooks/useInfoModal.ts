import { create } from "zustand";

export interface ModalStoreInterface {
    movieId?: string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    onClose: () => void;
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId: string) => set({ isOpen: true, movieId: movieId }),
    onClose: () => set({ isOpen: false, movieId: undefined})
    })
);

export default useInfoModal;
