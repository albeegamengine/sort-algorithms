import { bubbleSort, quickSort } from "../src/sort";

//シードデータ
const seedData = {
    random: [31, 24, 11, 65, 59, 999, 86, 73, 48, 5],
    sorted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    reverse: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    duplicate: [1, 5, 3, 4, 2, 2, 4, 5, 1, 2, 3, 4, 3, 1, 5],
    large: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000)),
};

const expectedData = {
    random: [5, 11, 24, 31, 48, 59, 65, 73, 86, 999],
    sorted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    reverse: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    duplicate: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
    large: [...seedData.large].sort((a, b) => a - b),
}

describe("bubbleSort", () => {
    test("ランダムな配列を並び替える", () => {
        expect(bubbleSort(seedData.random)).toEqual(expectedData.random);
    });
    test("ソート済の配列を並び替える", () => {
        expect(bubbleSort(seedData.sorted)).toEqual(expectedData.sorted);
    });
    test("逆順の配列を並び替える", () => {
        expect(bubbleSort(seedData.reverse)).toEqual(expectedData.reverse);
    });
    test("重複を含む配列を並び替える", () => {
        expect(bubbleSort(seedData.duplicate)).toEqual(expectedData.duplicate);
    });
    test("大きな要素の配列を並び替える", () => {
        const start = performance.now();
        const result = bubbleSort(seedData.large);
        const end = performance.now();

        expect(result).toEqual(expectedData.large);
        console.log(`Sort Time: ${end - start} ms`);
    });
});

describe("quickSort", () => {
    test("ランダムな配列を並び替える", () => {
        expect(quickSort(seedData.random)).toEqual(expectedData.random);
    });
    test("ソート済の配列を並び替える", () => {
        expect(quickSort(seedData.sorted)).toEqual(expectedData.sorted);
    });
    test("逆順の配列を並び替える", () => {
        expect(quickSort(seedData.reverse)).toEqual(expectedData.reverse);
    });
    test("重複を含む配列を並び替える", () => {
        expect(quickSort(seedData.duplicate)).toEqual(expectedData.duplicate);
    });
    test("大きな要素の配列を並び替える", () => {
        const start = performance.now();
        const result = quickSort(seedData.large);
        const end = performance.now();

        expect(result).toEqual(expectedData.large);
        console.log(`Sort Time: ${end - start} ms`);
    });
});