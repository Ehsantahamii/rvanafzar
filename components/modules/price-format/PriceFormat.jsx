const PriceFormat = (value) => {
    const formatValue = Intl.NumberFormat("fa-IR", {
        notation: "standard",
        maximumFractionDigits: 3,

    }).format(value);
    return formatValue;
};

export default PriceFormat;