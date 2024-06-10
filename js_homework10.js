var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price() {
        let totalPrice = 0;
        for (const key in this) {
            if (typeof this[key] !== "function") {
                totalPrice += Number.parseFloat(this[key].split(' ')[0]);
            }
        }
        return totalPrice;
    },

    getMinPrice() {
        let minPrice = parseInt(this['стрижка'], 10);
        for (const key in this) {
            if (typeof this[key] !== "function" && minPrice > parseInt(this[key], 10)) {
                minPrice = parseInt(this[key], 10);
            }
        }
        return minPrice;
    },

    getMaxPrice() {
        let maxPrice = parseInt(this['стрижка'], 10);
        for (const key in this) {
            if (typeof this[key] !== "function" && maxPrice < parseInt(this[key], 10)) {
                maxPrice = parseInt(this[key], 10);
            }
        }
        return maxPrice;
    }
};

console.log(services.getMinPrice());
console.log(services.getMaxPrice());

