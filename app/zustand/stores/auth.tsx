import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

export type AuthState = {
    login: boolean
}

export type AuthActions = {
    toggleLogin : () => void
}

export type AuthStore = AuthState & AuthActions

export const defaultInitState: AuthState = {
    login : false
}

export const createAuthStore = (
    initState: AuthState = defaultInitState,
) => {
    const useStore = create<AuthStore>()(
        devtools(
            persist(
                (set) => ({
                    ...initState,
                    toggleLogin: () => set((state) => ({ login: !state.login })),
                }),
                {
                    name: 'authStorage',
                },
            )
        )
    )

    return useStore;
}

