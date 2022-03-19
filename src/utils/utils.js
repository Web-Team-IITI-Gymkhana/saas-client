import { NOT_DEFINED } from "../constants"
import client from '../apollo/index'
import { query } from '../apollo/queries'


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

export const getCompanyDataFromCIK = async (companyCIK) => {
    try {
        if (companyCIK === null || companyCIK === '') {
            return
        }
        const res = await client.query({
            query: query,
            variables: {
                cik: companyCIK
            },
            // pollInterval: 500
            refetchQueries: [{ query }]
        });
        console.log(res)
        return res.data.getCompanyByCIK
    } catch (err) {
        console.error(err);
        throw err
    }
}