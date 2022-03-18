import { FEATURES, MATRICS } from '../constants';
import { isNotDefined } from './utils';

export const chartDataGenerator = (feature, form) => {
    const yearsData = Object.keys(form)
    let d = []
    if (Object.keys(FEATURES).includes(feature)) {
        yearsData.forEach(year => {
            if (isNotDefined([form[year].features[feature]])) {
                return
            }
            d.push({
                name: year,
                label: feature,
                [feature]: form[year].features[feature]
            })

        })
    } else if (Object.keys(MATRICS).includes(feature)) {
        yearsData.forEach(year => {
            if (isNotDefined([form[year].matrics[feature]])) {
                return
            }
            d.push({
                name: year,
                label: feature,
                [feature]: form[year].matrics[feature]
            })
        })
    }
    d.sort(function (a, b) {
        const c = Number(a.name.replaceAll('_', ''));
        const d = Number(b.name.replaceAll('_', ''));
        return c - d;
    });
    return d;
}
