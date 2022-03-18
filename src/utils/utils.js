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
    let nodata = 0;
    let n = 0;
    Object.keys(form).forEach((year) => {
        n++;
        if (form[year][key][feature] === NOT_DEFINED) {
            nodata++;
        }
    })
    if (nodata > n * 0.60) {
        return true
    }
    return false
}