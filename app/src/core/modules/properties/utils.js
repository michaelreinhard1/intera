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

export { formatPrice, formatArea };