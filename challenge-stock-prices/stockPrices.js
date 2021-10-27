const best = prices => {
    let maximumDiff = 0 
    let lowNow

    for (let i=0; i < prices.length; i++) {
        if (lowNow === undefined || prices[i] < lowNow) {
            lowNow = prices[i]
        }
        let diff = prices[i] - lowNow 

        if (diff > maximumDiff) {
            maximumDiff = diff
        }


    }

    console.log(maximumDiff);
    return maximumDiff
}
best([15, 20, 22, 1, 9])