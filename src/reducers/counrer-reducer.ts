export type counterStateType = {
    initialCount: number
    count: number
    maxValue: number
    error: boolean
    isSettingActive: boolean
}

type ActionsType = ReturnType<typeof setInitialCount
    | typeof setCount
    | typeof setError
    | typeof setIsSettingActive
    | typeof setMaxValue>

const initialState: counterStateType = {
    initialCount: 0,
    count: 0,
    maxValue: 5,
    error: false,
    isSettingActive: false,
}

export const counterReducer = (state = initialState, action: ActionsType): counterStateType => {
    switch (action.type) {
        case 'SET-INITIAL-COUNT': {
            return {...state, initialCount: action.initialCount}
        }
        case 'SET-COUNT': {
            return {...state, count: action.count}
        }
        case 'SET-MAX-VALUE': {
            return {...state, maxValue: action.maxValue}
        }
        case 'SET-ERROR': {
            return {...state, error: action.error}
        }
        case 'SET-IS-SETTING-ACTIVE': {
            return {...state, isSettingActive: action.isSettingActive}
        }
        default:
            return state
    }
}

export const setInitialCount = (initialCount: number) => {
    return {
        type: 'SET-INITIAL-COUNT',
        initialCount
    } as const
}
export const setCount = (count: number) => {
    return {
        type: 'SET-COUNT',
        count
    } as const
}
export const setMaxValue = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        maxValue
    } as const
}
export const setError = (error: boolean) => {
    return {
        type: 'SET-ERROR',
        error
    } as const
}
export const setIsSettingActive = (isSettingActive: boolean) => {
    return {
        type: 'SET-IS-SETTING-ACTIVE',
        isSettingActive
    } as const
}