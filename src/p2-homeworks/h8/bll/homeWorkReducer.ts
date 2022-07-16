import {UserType} from "../HW8";

type ActionType = {
    type: string
    payload: any
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                const newState = [...state].sort((a, b) =>
                    a.name.toLowerCase() && b.name.toLowerCase() && a.name > b.name ? 1 : -1)
                // need to fix
                return newState
            } else if (action.payload === 'down') {
                const newState = [...state].sort((a, b) =>
                    a.name.toLowerCase() && b.name.toLowerCase() && a.name > b.name ? -1 : 1)
                return newState
            }
            return state
        }
        case 'check': {
            const newState = [...state].filter(p => p.age > 18).sort((a,b)=>a.age-b.age)
            // need to fix
            return newState
        }
        default:
            return state
    }
}


