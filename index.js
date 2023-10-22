/* Function to verify and display if the entered sequence of numbers forms a palindrome */
function verifyPalindrome() {
  // Retrieve the number sequence entered by the user
  let enteredSequence = document.getElementById("numberToVerify").value;

  // Reverse the sequence for palindrome verification
  let reversedSequence = enteredSequence.split("").reverse().join("");

  // Compare the original sequence with its reversed version
  if (enteredSequence === reversedSequence) {
    document.getElementById("verificationResult").innerText =
      "Yes, the entered sequence is a palindrome!";
  } else {
    document.getElementById("verificationResult").innerText =
      "No, the entered sequence isn't a palindrome.";
  }
}
