//バブルソート
export function bubbleSort(arr: number[]): number[] {
    const result = [...arr];
    const len = result.length;

    if (len <= 1) {
        return result;
    }

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }
    return result;
}

//クイックソート
export function quickSort(arr: number[]): number[] {
    const result = [...arr];
    const len = result.length;

    if (len <= 1) {
        return result;
    }

    const pivot = result[Math.floor(len / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < len; i++) {
        if (i === Math.floor(len / 2)) {
            continue;
        }
        if (result[i] < pivot) {
            left.push(result[i]);
        } else {
            right.push(result[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
