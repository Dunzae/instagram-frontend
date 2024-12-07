import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

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
    const useDevStore = create<AuthStore>()(
        devtools(persist((set) => ({
            ...initState,
            toggleLogin: () => set((state) => ({ login: !state.login })),
        }),
        {
            name: 'authStorage',
            storage: createJSONStorage(() => sessionStorage),
          },
        )
    ))

    const useStore = create<AuthStore>()(
        (set) => ({
            ...initState,
            toggleLogin: () => set((state) => ({ login: !state.login })),
        })
    )

    return process.env.NODE_ENV === "development" ? useDevStore : useStore;
}
