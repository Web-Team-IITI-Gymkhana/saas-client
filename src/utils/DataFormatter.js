import data from '../../demo.json'

export class DataFormatter {
    constructor(companyId) {
        this.companyId = companyId
    }

    getCompanyMetaData() {
        return {
            Address: data[this.companyId]['Address'],
            CompanyName: data[this.companyId]['CompanyName'],
            FaxNumber: data[this.companyId]['FaxNumber'],
            HoldingType: data[this.companyId]['HoldingType'],
            IPODate: data[this.companyId]['IPODate'],
            PhoneNumber: data[this.companyId]['PhoneNumber'],
            URL: data[this.companyId]['URL']
        }
    }

    getAllFeatures() {
        return Object.keys(Object.values(data[this.companyId]['_10k'])[0].features)
    }

    getQuarterlyFeatureData(featureName) {
        const list = []
        const quarters = Object.keys(data[this.companyId]['_10q'])
        const featureDetails = Object.values(data[this.companyId]['_10q']).map(quarters => quarters.features[featureName])

        // console.log(years)
        // console.log(feature_details)

        quarters.forEach((quarter, idx) => list.push({ quarter, [featureName]: featureDetails[idx] }))

        return list
    }

    getYearlyFeatureData(featureName) {
        const list = []
        const years = Object.keys(data[this.companyId]['_10k'])
        const featureDetails = Object.values(data[this.companyId]['_10k']).map(years => years.features[featureName])
        years.forEach((year, idx) => list.push({ year, [featureName]: featureDetails[idx] }))

        return list
    }
}
