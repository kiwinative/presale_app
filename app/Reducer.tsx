export const INITIAL_STATE = {
    open: true,
    infoSubmenu: true,
    linkSubmenu: true,
}

const animationReducer = (state, action) => {
    switch (action.type) {
        case "OPEN_SIDENAV":
            return {
                ...state,
                open: true,
            };
        case "OPEN_INFOSUBMENU":
            return {
                ...state,
                infoSubmenu: true,
            };
        case "OPEN_LINKSUBMENU": {
            return {
                ...state,
                linkSubmenu: true,
            }
        }
    }
}