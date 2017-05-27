class SteamLevel {
    static getRequiredXpFromLevel(level) {
        const length = level.toString().length;

        if (level <= 10) {
            return 100;
        } else if (level < 100) {
            const firstDigit = parseInt(level.toString().split('')[length - 2]);
            const lastDigit = parseInt(level.toString().split('')[length - 1]);

            if (lastDigit === 0) {
                return (firstDigit + '0').split('')
                            .reduce((a, b) => parseInt(a) + parseInt(b), 0) * 100;
            } else {
                return (firstDigit + '1').split('')
                            .reduce((a, b) => parseInt(a) + parseInt(b), 0) * 100;
            }
        } else {
            const penultimateDigit = parseInt(level.toString().split('')[length - 2]);
            const lastDigit = parseInt(level.toString().split('')[length - 1]);

            let lastTwoSum = 0;

            if (lastDigit === 0) {
                lastTwoSum = (penultimateDigit + '0').split('')
                            .reduce((a, b) => parseInt(a) + parseInt(b), 0);
            } else {
                lastTwoSum = (penultimateDigit + '1').split('')
                            .reduce((a, b) => parseInt(a) + parseInt(b), 0);
            }

            const lastTwoDigits = penultimateDigit.toString() + lastDigit.toString();

            const leadingDigits = level.toString().replace(lastTwoDigits.toString(), '');

            if (lastTwoSum === 10) {
                return (parseInt(level.toString().replace(lastTwoDigits.toString(), '')) + 1) * 1000;
            } else {
                return parseInt(
                    leadingDigits +
                    lastTwoSum.toString()) * (parseInt(leadingDigits) % 10 === 0 ? 10 : 100);
            }
        }
    }

    static getTotalXpFromLevel(level) {
        let total = 0;
        for (let i = 1; i <= level; i++) {
            total += this.getRequiredXpFromLevel(i);
        }
        return total;
    }
}

module.exports = SteamLevel;
