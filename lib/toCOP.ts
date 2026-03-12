const toCOP = (value: number) => {
    return new Intl.NumberFormat('co-ES', { currency: 'COP' }).format(value);
};

export default toCOP;