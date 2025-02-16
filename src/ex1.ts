export function checkSymmetryString(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
console.log(checkSymmetryString('level'));
console.log(checkSymmetryString('radar'));
console.log(checkSymmetryString('const'));

