const lab10_1 = (m, c, x) => {
    if((c === 2) && (x > 1)) m/=c;
    if((x > 5) || (m === 1)) m++;
    return m;
}

module.exports = lab10_1;