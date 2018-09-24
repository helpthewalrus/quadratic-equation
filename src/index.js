module.exports = function solveEquation(equation) {
  const equationSplit = equation.split(' ');
  const a = equationSplit[0];
  const b = equationSplit[3] + equationSplit[4];
  const c = equationSplit[7] + equationSplit[8];
  const d = b**2 - 4*a*c;

  if (d > 0) {
    const x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
    const x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
    const result = [x1, x2];
    return result.sort((a, b) => a - b); 
  } else if (d === 0) {
    const x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
    return [x1];
  } else {
    return 'There are no roots.'
  }
};