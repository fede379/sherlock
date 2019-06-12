exports.sherlock = (s) => {
    // history string default
    let hist = {
        input: s,
        output: '',
        isValid: false
    }
    // get Map() => {char => frequency}
    let frequencies = getFrequencies(s.split(''))
    // get Set() => { frecuency }
    let fSet = new Set(frequencies.values())
    if (fSet.size > 2 || fSet.size < 1) {
        // different frequencies cannot be more than two or less than one
        return hist
    } else if (fSet.size === 1) {
        // all chars with same frequency
        hist.output = s
        hist.isValid = true
        return hist
    } else { // two differents frequencies
        // get Map() => { frequency => cont }
        let mapFreqCont = getFrequencies(Array.from(frequencies.values()))
        // mapping variables for conditions
        let [f1, f2] = mapFreqCont.keys()
        let [f1Cont, f2Cont] = mapFreqCont.values()
        // f is 1 and occurs only once
        if ((f1 === 1 && f1Cont === 1) || (f2 === 1 && f2Cont === 1)) {
            hist.isValid = true
            hist.output = getValidOutput(s, frequencies, (f1 === 1 && f1Cont === 1 ? f1 : f2))
            return hist
        } else if ((Math.abs(f1 - f2) === 1) && ((f1 > f2 && f1Cont === 1) || (f2 > f1 && f2Cont === 1))) { // difference between frequencies is 1 and the frequency with count 1 is greater            
            hist.isValid = true
            hist.output = getValidOutput(s, frequencies, (f1 > f2 ? f1 : f2))
            return hist
        } else {
            return hist
        }
    }
}

getFrequencies = (array) => {
    return array.reduce((map, value) => {
        map.has(value) ? map.set(value, map.get(value) + 1) : map.set(value, 1)
        return map
    }, new Map())
}

getValidOutput = (str, freqs, f) => {
    for (let [key, value] of freqs.entries()) {
        if (value === f) return removeByIndex(str, str.lastIndexOf(key))
    }
}

removeByIndex = (str, index) => {
    if (str.length === (index + 1) ) {
        return str.slice(0, str.length - 1)
    } else {
        return str.substring(0, index) + str.substring(index + 1)
    }
}