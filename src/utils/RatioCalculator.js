import { FEATURES, MATRICS } from "../constants"
const dummy = {
    "CashAndCashEquivalents": 449772000.0,
    "MarketableSecurities": "NaN",
    "TotalCurrentAssets": 521680000.0,
    "TotalAssets": 1331747000.0,
    "PropertyAndEquipmentNet": 57464000.0,
    "Goodwill": 488747000.0,
    "TotalCurrentLiabilities": 159146000.0,
    "SharesOutstanding": 63231376.0,
    "TotalStockholdersEquity": 1161321000.0,
    "TotalEquity": 1331747000.0,
    "GrossProfit": "NaN",
    "TotalOperatingExpenses": "NaN",
    "NetIncome": -14871000.0,
    "GrossPropertyAndEquipment": "NaN",
    "StockPrice": 12.8,
    "SalesAndMarketing": 166710000.0,
    "TotalDebt": "NaN",
    "Revenues": "NaN",
    "CostOfSales": "NaN",
    "OperatingIncome": -21972000.0,
    "NetLoss": "NaN",
    "RecurringRevenue": "NaN",
    "ARR": "NaN",
    "GAAPRevenue": "NaN",
    "NonGAAPEarnings": "NaN",
    "MRR": "NaN",
    "FilingDate": "2019-07-30",
    "DocURL": "https://www.sec.gov/Archives/edgar/data/1459417/000145941719000006/a2u10-qq22019.htm"
}
class MatricsCalculator {
    NotDefined = "NaN"
    constructor(features = dummy) {
        this.company = features
        this.ratios = this.calculateMetrics()
    }
    calculateMetrics() {
        return {
            [MATRICS.WorkingCapitalRatio.id]: this.getWorkingCapitalRatio(),
            [MATRICS.ChurnRate.id]: this.getChurnRate(),
            [MATRICS.DebtToEquityRatio.id]: this.getDebtToEquityRatio(),
            [MATRICS.EBIDTA.id]: this.getEBIDTA(),
            [MATRICS.EarningPerShareRatio.id]: this.getEarningPerShareRatio(),
            [MATRICS.GrossMargin.id]: this.getGrossMargin(),
            [MATRICS.GrossProfit.id]: this.getGrossProfit(),
            [MATRICS.MagicNumber.id]: this.getMagicNumber(),
            [MATRICS.MarketCap.id]: this.getMarketCap(),
            [MATRICS.PERatio.id]: this.getPERatio(),
            [MATRICS.ReturnOfEquity.id]: this.getReturnOfEquity(),
            [MATRICS.Rule40.id]: this.getRule40(),
        }
    }
    getEV(features = this.company) {
        if (this.getMarketCap(features) === this.NotDefined || features.TotalStockholdersEquity === this.NotDefined || features.TotalDebt === this.NotDefined || features.CashAndCashEquivalents === this.NotDefined) {
            return this.NotDefined
        }
        return {
            value: (this.getMarketCap(features).value + features.TotalStockholdersEquity + features.TotalDebt - features.CashAndCashEquivalents),
            dependency: [MATRICS.MarketCap.id, FEATURES.TotalStockholdersEquity.id, FEATURES.TotalDebt.id, FEATURES.CashAndCashEquivalents.id]
        }
    }
    getGrossMargin(features = this.company) {
        if (features.Revenues === this.NotDefined || features.CostOfSales === this.NotDefined) {
            return this.NotDefined
        }
        return {
            value: ((features.Revenues - features.CostOfSales) / features.Revenues),
            dependency: [FEATURES.Revenues.id, FEATURES.CostOfSales.id]
        }
    }
    getGrossProfit(features = this.company) {
        if (features.Revenues === this.NotDefined || features.CostOfSales === this.NotDefined) {
            return this.NotDefined
        }
        return { value: (features.Revenues - features.CostOfSales), dependency: [FEATURES.Revenues.id, FEATURES.CostOfSales.id] }
    }
    getMagicNumber(features = this.company) {
        //TODO
    }
    getMarketCap(features = this.company) {
        if (features.SharesOutstanding === this.NotDefined || features.StockPrice === this.NotDefined) {
            return this.NotDefined
        }
        return { value: (features.SharesOutstanding * features.StockPrice), dependency: [FEATURES.SharesOutstanding.id, FEATURES.StockPrice.id] }
    }
    getRule40(features = this.company) {
        //TODO
    }
    getChurnRate(features = this.company) {
        //TODO
    }
    getEBIDTA(features = this.company) {
        if (features.Revenues === this.NotDefined || features.CostOfSales === this.NotDefined || features.TotalOperatingExpenses === this.NotDefined) {
            return this.NotDefined
        }
        return { value: (features.Revenues - features.CostOfSales - features.TotalOperatingExpenses), dependency: [FEATURES.Revenues.id, FEATURES.CostOfSales.id, FEATURES.TotalOperatingExpenses.id] }
    }
    getReturnOfEquity(features = this.company) {
        if (features.NetIncome === this.NotDefined || features.TotalStockholdersEquity === this.NotDefined) {
            return this.NotDefined
        }
        return { value: ((features.NetIncome / features.TotalStockholdersEquity) * 100), dependency: [FEATURES.NetIncome.id, FEATURES.TotalStockholdersEquity.id] }
    }
    getPERatio(features = this.company) {
        // NO DATA
        if (features.StockPrice === this.NotDefined || this.getEarningPerShareRatio(features) === this.NotDefined) {
            return this.NotDefined
        }
        return { value: (features.StockPrice / this.getEarningPerShareRatio(features).value), dependency: [FEATURES.StockPrice.id, MATRICS.EarningPerShareRatio.id] }
    }

    getWorkingCapitalRatio(features = this.company) {
        if (features.TotalCurrentAssets === this.NotDefined || features.TotalCurrentLiabilities === this.NotDefined) {
            return this.NotDefined
        }
        return { value: (features.TotalCurrentAssets / features.TotalCurrentLiabilities), dependency: [FEATURES.TotalCurrentAssets.id, FEATURES.TotalCurrentLiabilities.id] }
    }
    getEarningPerShareRatio(features = this.company) {
        if (features.NetIncome === this.NotDefined || features.SharesOutstanding === this.NotDefined) {
            return this.NotDefined
        }
        return { value: (features.NetIncome / features.SharesOutstanding), dependency: [FEATURES.NetIncome.id, FEATURES.SharesOutstanding.id] }
    }
    getDebtToEquityRatio(features = this.company) {
        if (features.TotalCurrentLiabilities === this.NotDefined || features.TotalStockholdersEquity === this.NotDefined) {
            return this.NotDefined
        }
        return { value: (features.TotalCurrentLiabilities / features.TotalStockholdersEquity), dependency: [FEATURES.TotalCurrentLiabilities.id, FEATURES.TotalStockholdersEquity.id] }
    }

}
export default MatricsCalculator