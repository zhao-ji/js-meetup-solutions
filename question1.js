function bestWithHelper(numbers) {
    return numbers.reduce((result, item) => {
        if (!result.length) return [item];
        const bigger = [];
        const less = [];
        result.map(i => i >= item ? bigger.push(i) : less.push(i));
        return [...bigger, item, ...less];
    }, []);
}

function unittest() {
    if (equal(bestWithHelper([]), [])) console.log("all right 0...")
    if (equal(bestWithHelper([1]), [1])) console.log("all right 1...")
    if (equal(bestWithHelper([1, 2, 3]), [3, 2, 1])) console.log("all right 2...")
    if (equal(bestWithHelper([3, 2, 1]), [3, 2, 1])) console.log("all right 3...")
    if (equal(bestWithHelper([2, 3, 1]), [3, 2, 1])) console.log("all right 4...")
    if (equal(bestWithHelper([2, 3, 1, 4, 5, 6]), [6, 5, 4, 3, 2, 1])) console.log("all right 5...")

}

function equal(array1, array2) {
    if (array1.length !== array2.length) return false;
    const result = array1.map((i, index) => i === array2[index]).filter(i => !i).length;
    return result === 0;
}

unittest()
