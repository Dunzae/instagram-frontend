import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

export type AuthState = {
    isLogin: boolean
}

export type AuthActions = {
    login : () => void,
    logout : () => void,
}

export type AuthStore = AuthState & AuthActions

export const defaultInitState: AuthState = {
    isLogin : false
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
                    logout : () => set(() => ({ isLogin : false}))
                }),
                {
                    name: 'authStorage',
                },
            )
        )
    )

    return useStore;
}

