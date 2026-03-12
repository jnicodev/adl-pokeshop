const calculatePkmnPrice = (name: string, baseExperience: number, weight: number) => {
    return name.split('').reduce((total: number, current: string) => {
        return total + current.charCodeAt(0);
    }, (baseExperience * 5) + weight);
};

export default calculatePkmnPrice;