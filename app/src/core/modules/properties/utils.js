const formatPrice = (price) => {
    return `${price.toLocaleString("nl-NL", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 0
    })}`;
};

const formatArea = (area) => {
    return `${area.toLocaleString("nl-NL")} m²`;
};

const convertObjectToArrayForSelect = (object) => {
    return Object.keys(object).map(key => {
        return {
            value: key,
            label: object[key]
        };
    }
    );
}

export { formatPrice, formatArea, convertObjectToArrayForSelect };