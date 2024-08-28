import Product from "../types/Product";

const products: Array<Product> = [
    {
        name: "Duracell Kalın Pil",
        mark: "Duracell",
        price: 1000,
        productImages: [
            {
                productId: "",
                altText:"Duracell Kalın Pil",
                fileUri: "/images/mock/duracell-kalin-pil-6586.webp",
                id: "",
            }
        ],
        uri: "duracell-li-ion-pil",
        props: [
            {key: "Kapasite",value: "120, 240, 680"}
        ],
        stockCode: "QWERTY",
        createdAt: Date.now(),
        description: "",
        form: [
            {
                type: "choice-single",
                label: "mAh Değeri",
                value: "",
                optionSet: [
                    {
                        key: "1",
                        value: "120 mAh"
                    },
                    {
                        key: "2",
                        value: "240 mAh"
                    },
                    {
                        key: "3",
                        value: "680 mAh"
                    }
                ]
            }
        ]
    },
    {
        name: "Şarjlı Kalem Pil",
        mark: "Duracell",
        price: 1000,
        productImages: [
            {
                productId: "",
                altText:"Duracell Kalın Pil",
                fileUri: "/images/mock/duracell-sarjli-kalem-pil-2500-mah-piller-duracell-7848-31-B.jpg",
                id: "",
            }
        ],
        uri: "duracell-li-ion-pil",
        props: [
            {key: "Kapasite",value: "120, 240, 680"}
        ],
        stockCode: "QWERTY",
        createdAt: Date.now(),
        description: "",
        form: [
            {
                type: "choice-single",
                label: "mAh Değeri",
                value: "",
                optionSet: [
                    {
                        key: "1",
                        value: "120 mAh"
                    },
                    {
                        key: "2",
                        value: "240 mAh"
                    },
                    {
                        key: "3",
                        value: "680 mAh"
                    }
                ]
            }
        ]
    },
    {
        name: "Li-Ion Pil",
        mark: "Parasonic",
        price: 1000,
        productImages: [
            {
                productId: "",
                altText:"Duracell Kalın Pil",
                fileUri: "/images/mock/parasonic.jpg",
                id: "",
            }
        ],
        uri: "duracell-li-ion-pil",
        props: [
            {key: "Kapasite",value: "120, 240, 680"}
        ],
        stockCode: "QWERTY",
        createdAt: Date.now(),
        description: "",
        form: [
            {
                type: "choice-single",
                label: "mAh Değeri",
                value: "",
                optionSet: [
                    {
                        key: "1",
                        value: "120 mAh"
                    },
                    {
                        key: "2",
                        value: "240 mAh"
                    },
                    {
                        key: "3",
                        value: "680 mAh"
                    }
                ]
            }
        ]
    },
    {
        name: "Kalem Pil",
        mark: "Varta",
        price: 1000,
        productImages: [
            {
                productId: "",
                altText:"Duracell Kalın Pil",
                fileUri: "/images/mock/varta-kalem-pil-piller-varta-9328-31-B.jpg",
                id: "",
            }
        ],
        uri: "duracell-li-ion-pil",
        props: [
            {key: "Kapasite",value: "120, 240, 680"}
        ],
        stockCode: "QWERTY",
        createdAt: Date.now(),
        description: "",
        form: [
            {
                type: "choice-single",
                label: "mAh Değeri",
                value: "",
                optionSet: [
                    {
                        key: "1",
                        value: "120 mAh"
                    },
                    {
                        key: "2",
                        value: "240 mAh"
                    },
                    {
                        key: "3",
                        value: "680 mAh"
                    }
                ]
            }
        ]
    }
]

export default products;