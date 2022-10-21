export default interface ICurrency {
    id: string
    createdAt: string
    updatedAt: string
    type: string
    name: string
    code: string
    precision: string
    maxAmount: string
    minAmount: string
    minBuyAmount: string
    maxBuyAmount: string
    addressRegex: string
    testnetRegex: string
    supportsTestMode: boolean
    isSupportedInUS: boolean
};