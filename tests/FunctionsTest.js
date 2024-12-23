describe("Array Manipulation Functions", function() {
  
  // Test case for filterNumbers
  it("should return all numbers greater than 3", function() {
    const result = filterNumbers(numbers);
    expect(result).toEqual([4, 5, 6]); // All numbers greater than 3
  });

  // Test case for addElementToStart
  it("should add 0 to the beginning of the array", function() {
    const result = addElementToStart(numbers);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6]); // Number 0 should be at the start
  });

  // Test case for findLongestWord
  it("should return the longest word from the array", function() {
    const result = findLongestWord(words);
    expect(result).toEqual('banana'); // 'banana' is the longest word
  });

  // Test case for removeElements
  it("should remove the second and third elements from the array", function() {
    const result = removeElements(letters);
    expect(result).toEqual(['a', 'd']); // Removes 'b' and 'c', so ['a', 'd'] remains
  });

  // Test case for findWordIndex
  it("should return the index of the word 'cat'", function() {
    const result = findWordIndex(words);
    expect(result).toEqual(2); // 'cat' is at index 2
  });

});
