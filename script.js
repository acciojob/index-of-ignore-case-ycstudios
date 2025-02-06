function indexOfIgnoreCase(str, subStr) {
    // Handle edge cases
    if (!str || !subStr) return -1;
    if (subStr.length > str.length) return -1;
    if (subStr === '') return 0;

    // Convert both strings to lowercase
    return str.toLowerCase().indexOf(subStr.toLowerCase());
}


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
