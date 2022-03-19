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

    let error = null;
    let data = null;
    try {
        if (companyCIK === null || companyCIK === '') {
            error = "Company CIK is null or undefined"
            throw error
        }
        const res = await client.query({
            query: query,
            variables: {
                cik: companyCIK
            },
            // pollInterval: 500
            refetchQueries: [{ query }]
        });

        data = res
    } catch (err) {
        error = err
        console.error(err);
        throw err
    }

    return { res: data, error }
}
    
export const combineCluster = (summaryList) => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr = arr.concat(summaryList[`_${i}`]);
    }
    arr.sort((a, b)=>{
        let keyA = new Date(a.date), keyB = new Date(b.date);
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
    });
    return arr;
}