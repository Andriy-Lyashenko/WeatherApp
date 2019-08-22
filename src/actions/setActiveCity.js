import { ACTIVE_CITY } from "./index";

const setAtiveCity = city => {
    return {
        type: ACTIVE_CITY,
        payload: city
    }
}
export default setAtiveCity