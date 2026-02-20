/**
 * 📋 Jugaad Form Validator - Indian Style!
 *
 * India mein form bharna ek art hai! College admission ka form validate
 * karna hai. Har field ke apne rules hain. Tujhe ek errors object return
 * karna hai jisme galat fields ke error messages hain. Agar sab sahi hai
 * toh empty errors object aur isValid = true.
 *
 * formData object:
 *   { name, email, phone, age, pincode, state, agreeTerms }
 *
 * Validation Rules:
 *   1. name: must be a non-empty trimmed string, min 2 chars, max 50 chars
 *      Error: "Name must be 2-50 characters"
 *
 *   2. email: must be a string containing exactly one "@" and at least one "."
 *      after the "@". Use indexOf(), lastIndexOf(), includes().
 *      Error: "Invalid email format"
 *
 *   3. phone: must be a string of exactly 10 digits, starting with 6, 7, 8, or 9
 *      (Indian mobile numbers). Check each char is a digit.
 *      Error: "Invalid Indian phone number"
 *
 *   4. age: must be a number between 16 and 100 inclusive, and an integer.
 *      JUGAAD: Agar string mein number diya hai (e.g., "22"), toh parseInt()
 *      se convert karo. Agar convert nahi ho paya (isNaN), toh error.
 *      Error: "Age must be an integer between 16 and 100"
 *
 *   5. pincode: must be a string of exactly 6 digits, NOT starting with "0"
 *      Error: "Invalid Indian pincode"
 *
 *   6. state: Use optional chaining (?.) and nullish coalescing (??) -
 *      if state is null/undefined, treat as "". Must be a non-empty string.
 *      Error: "State is required"
 *
 *   7. agreeTerms: must be truthy (Boolean(agreeTerms) === true).
 *      Falsy values: 0, "", null, undefined, NaN, false
 *      Error: "Must agree to terms"
 *
 * Return:
 *   { isValid: boolean, errors: { fieldName: "error message", ... } }
 *   - isValid is true ONLY when errors object has zero keys
 *
 * Hint: Use typeof, Boolean(), parseInt(), isNaN(), Number.isInteger(),
 *   ?. (optional chaining), ?? (nullish coalescing), Object.keys(),
 *   startsWith(), trim(), length
 *
 * @param {object} formData - Form fields to validate
 * @returns {{ isValid: boolean, errors: object }}
 *
 * @example
 *   validateForm({
 *     name: "Rahul Sharma", email: "rahul@gmail.com", phone: "9876543210",
 *     age: 20, pincode: "400001", state: "Maharashtra", agreeTerms: true
 *   })
 *   // => { isValid: true, errors: {} }
 *
 *   validateForm({
 *     name: "", email: "bad-email", phone: "12345", age: 10,
 *     pincode: "0123", state: null, agreeTerms: false
 *   })
 *   // => { isValid: false, errors: { name: "...", email: "...", ... } }
 */
export function validateForm(formData) {
    // Your code here
    const validateForm = {};
    let isValid = true;
    if (
        formData.name == undefined ||
        formData.name == "" ||
        formData.name[0] == " " ||
        formData.name[-1] == " " ||
        formData.name.length < 2 ||
        formData.name.length > 50
    ) {
        validateForm.name = "Name must be 2-50 characters";
        isValid = false;
    }

    if (
        formData.email == undefined ||
        formData.email == "" ||
        !(
            formData.email.indexOf("@") === formData.email.lastIndexOf("@") &&
            formData.email.includes("@")
        ) ||
        !formData.email.includes(".", formData.email.indexOf("@"))
    ) {
        validateForm.email = "Invalid email format";
        isValid = false;
    }

    if (
        formData.phone == undefined ||
        formData.phone == "" ||
        formData.phone.length != 10 ||
        !(
            formData.phone.startsWith("6") ||
            formData.phone.startsWith("7") ||
            formData.phone.startsWith("8") ||
            formData.phone.startsWith("9")
        ) ||
        !/^\d+$/.test(formData.phone)
    ) {
        validateForm.phone = "Invalid Indian phone number";
        isValid = false;
    }

    if (
        formData.age == undefined ||
        !Number.isInteger(parseFloat(formData.age)) ||
        formData.age < 16 ||
        formData.age > 100
    ) {
        validateForm.age = "Age must be an integer between 16 and 100";
        isValid = false;
    }

    if (
        formData.pincode == undefined ||
        formData.pincode == "" ||
        formData.pincode.length != 6 ||
        formData.pincode.startsWith("0") ||
        !/^\d+$/.test(formData.pincode)
    ) {
        validateForm.pincode = "Invalid Indian pincode";
        isValid = false;
    }

    if (
        formData?.state == undefined ||
        formData?.state == null ||
        formData?.state == ""
    ) {
        validateForm.state = "State is required";
        isValid = false;
    }

    if (!Boolean(formData.agreeTerms)) {
        validateForm.agreeTerms = "Must agree to terms";
        isValid = false;
    }

    return {
        errors: validateForm,
        isValid: isValid,
    };
}

console.log(
    validateForm({
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        phone: "9876543210",
        age: "20",
        pincode: "400001",
        state: "Maharashtra",
        agreeTerms: true,
    }),
);
