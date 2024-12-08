import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

export type AuthState = {
    isLogin: boolean,
    _hasHydrated: boolean
}

export type AuthActions = {
    login: () => void,
    logout: () => void,
    setHasHydrated: (state: boolean) => void
}

export type AuthStore = AuthState & AuthActions

export const defaultInitState: AuthState = {
    isLogin: false,
    _hasHydrated: false,
}

export const createAuthStore = (
    initState: AuthState = defaultInitState,
) => {
    const useStore = create<AuthStore>()(
        devtools(
            persist(
                (set) => ({
                    ...initState,
                    login: () => set(() => ({ isLogin: true })),
                    logout: () => set(() => ({ isLogin: false })),
                    setHasHydrated: (state) => {
                        set({
                            _hasHydrated: state
                        });
                    }
                }),
                {
                    name: 'authStorage',
                    onRehydrateStorage: (state) => {
                        return () => state.setHasHydrated(true)
                    }
                },
            )
        )
    )

    return useStore;
}

