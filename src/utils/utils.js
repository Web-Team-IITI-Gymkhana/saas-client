import { NOT_DEFINED } from "../constants"

export const isNotDefined = (features) => {
    for (let feature of features) {
        if (feature === NOT_DEFINED) {
            return true
        }
    }
    return false;
}

export const isInsufficientData = (form, key, feature) => {
    if (!form || form.length === 0) {
        return true
    }
    let nodata = 0;
    let n = 0;
    form.forEach((year) => {
        n++;
        if (year[key][feature] === NOT_DEFINED) {
            nodata++;
        }
    })
    if (nodata > n * 0.60) {
        return true
    }
    return false
}