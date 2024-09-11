//Question 1
function isPalindrome(str) {
    
    let cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
   
    return cleanedString === cleanedString.split('').reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal, Panama'));
console.log(isPalindrome('Was it a car or a cat I saw'));     
console.log(isPalindrome('Hello, World!'));                   

//Question 2
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));  
console.log(reverseString("JavaScript")); 


//Question 3
function countDistinctPalindromes(str) {
    let palindromes = new Set(); 

    // Helper function to expand around center and find palindromes
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            palindromes.add(str.slice(left, right + 1));
            right++;
        }
    }

    // Iterate through each character in the string and treat each as a potential center
    for (let i = 0; i < str.length; i++) {
        // Odd-length palindromes 
        expandAroundCenter(i, i);

        // Even-length palindromes 
        expandAroundCenter(i, i + 1);
    }

    return palindromes.size;
}

// Example usage:
console.log(countDistinctPalindromes("ababa"));  // 5 -> "a", "b", "aba", "bab", "ababa"
console.log(countDistinctPalindromes("aaa"));    // 3 -> "a", "aa", "aaa"


//Question 4
function areAnagrams(str1, str2) {
    
    const cleanString = (str) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');

  
    return cleanString(str1) === cleanString(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent"));   
console.log(areAnagrams("Hello", "Oleh"));      
console.log(areAnagrams("apple", "pale"));     


//Question 5
function removeDuplicates(str) {
    let result = '';
    let seen = new Set(); 

    for (let char of str) {
        if (!seen.has(char)) {
            result += char; 
            seen.add(char); 
        }
    }
    return result;
}

// Example usage:
console.log(removeDuplicates('programming'));  // "progamin"
console.log(removeDuplicates('hello world'));  // "helo wrd"


//Question 6
function countDistinctPalindromes(str) {
    let palindromes = new Set(); // Use a Set to store distinct palindromes

    // Helper function to expand around the center and find palindromes
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            palindromes.add(str.slice(left, right + 1));
            left--;
            right++;
        }
    }

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Odd-length palindromes 
        expandAroundCenter(i, i);

        // Even-length palindromes 
        expandAroundCenter(i, i + 1);
    }

    return palindromes.size; 
}

// Example usage:
console.log(countDistinctPalindromes("ababa"));  // 5 -> "a", "b", "aba", "bab", "ababa"
console.log(countDistinctPalindromes("aaa"));    // 3 -> "a", "aa", "aaa"



//Question 7
function longestCommonPrefix(strs) {
    if (strs.length === 0) return ''; 

    
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // Continuously shorten the prefix until it's a prefix of strs[i]
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); 
            if (prefix === '') return ''; 
        }
    }
    
    return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""


//Question 8
function countDistinctPalindromes(str) {
    let palindromes = new Set();
    str = str.toLowerCase(); 

    // Helper function to expand around center and find palindromes
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            palindromes.add(str.slice(left, right + 1)); 
            left--;
            right++;
        }
    }

    // Iterate through each character in the string and treat each as a potential center
    for (let i = 0; i < str.length; i++) {
        // Odd-length palindromes
        expandAroundCenter(i, i);

        // Even-length palindromes 
        expandAroundCenter(i, i + 1);
    }

    return palindromes.size;
}

// Example usage:
console.log(countDistinctPalindromes("Ababa"));  // 5 -> "a", "b", "aba", "bab", "ababa"
console.log(countDistinctPalindromes("AaA"));    // 3 -> "a", "aa", "aaa"
