const FEATURES = {
    ARR: { id: 'ARR' },
    CashAndCashEquivalents: { id: 'CashAndCashEquivalents' },
    CostOfSales: { id: 'CostOfSales' },
    GAAPRevenue: { id: 'GAAPRevenue' },
    Goodwill: { id: 'Goodwill' },
    GrossProfit: { id: 'GrossProfit' },
    GrossPropertyAndEquipment: { id: 'GrossPropertyAndEquipment' },
    MRR: { id: 'MRR' },
    MarketableSecurities: { id: 'MarketableSecurities' },
    NetIncome: { id: 'NetIncome' },
    NetLoss: { id: 'NetLoss' },
    NonGAAPEarnings: { id: 'NonGAAPEarnings' },
    OperatingIncome: { id: 'OperatingIncome' },
    PropertyAndEquipmentNet: { id: 'PropertyAndEquipmentNet' },
    RecurringRevenue: { id: 'RecurringRevenue' },
    Revenues: { id: 'Revenues' },
    SalesAndMarketing: { id: 'SalesAndMarketing' },
    SharesOutstanding: { id: 'SharesOutstanding' },
    StockPrice: { id: 'StockPrice' },
    TotalAssets: { id: 'TotalAssets' },
    TotalCurrentAssets: { id: 'TotalCurrentAssets' },
    TotalCurrentLiabilities: { id: 'TotalCurrentLiabilities' },
    TotalDebt: { id: 'TotalDebt' },
    TotalEquity: { id: 'TotalEquity' },
    TotalOperatingExpenses: { id: 'TotalOperatingExpenses' },
    TotalStockholdersEquity: { id: 'TotalStockholdersEquity' }
}
const MATRICS = {
    EV: { id: 'EV', dependency: ['MarketCap', FEATURES.TotalStockholdersEquity.id, FEATURES.TotalDebt.id, FEATURES.CashAndCashEquivalents.id] },
    GrossMargin: { id: 'GrossMargin', dependency: [FEATURES.Revenues.id, FEATURES.CostOfSales.id] },
    GrossProfit: {
        id: 'GrossProfit',
        dependency: [FEATURES.Revenues.id, FEATURES.CostOfSales.id]
    },
    GrowthRate: {
        id: 'GrowthRate',
        dependency: ['EBIDTA']
    },
    ProfitMargin: {
        id: 'ProfitMargin',
        dependency: [FEATURES.NetIncome.id]
    },
    MagicNumber: { id: 'MagicNumber', dependency: ['EBIDTA', FEATURES.CostOfSales.id] },
    MarketCap: { id: 'MarketCap', dependency: [FEATURES.SharesOutstanding.id, FEATURES.StockPrice.id] },
    Rule40: { id: 'Rule40', dependency: ['GrowthRate', 'ProfitMargin'] },
    EBIDTA: {
        id: 'EBIDTA',
        dependency: [FEATURES.Revenues.id, FEATURES.CostOfSales.id, FEATURES.TotalOperatingExpenses.id]
    },
    ReturnOnEquity: {
        id: 'ReturnOnEquity', dependency: [FEATURES.NetIncome.id, FEATURES.TotalStockholdersEquity.id]
    },
    PERatio: { id: 'PERatio', dependency: [FEATURES.StockPrice.id, 'EarningPerShareRatio'] },

    WorkingCapitalRatio: {
        id: 'WorkingCapitalRatio', dependency: [FEATURES.TotalCurrentAssets.id, FEATURES.TotalCurrentLiabilities.id]
    },
    EarningPerShareRatio: { id: 'EarningPerShareRatio', dependency: [FEATURES.NetIncome.id, FEATURES.SharesOutstanding.id] },
    DebtToEquityRatio: { id: 'DebtToEquityRatio', dependency: [FEATURES.TotalCurrentLiabilities.id, FEATURES.TotalStockholdersEquity.id] }
}
const NOT_DEFINED = 'NaN'
export { FEATURES, MATRICS, NOT_DEFINED }