interface OrderForm {
    type: "input" | "choice-single" | "choice-multi" | "checkbox"
    label: string
    value: string
    optionSet: Array<{
        key: string
        value: string
    }>
}

export type { OrderForm };