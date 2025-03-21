// Cross-Site Scripting (XSS)
function xssVulnerable(userInput) {
  document.body.innerHTML = userInput; // Critical XSS vulnerability!
}

// Example usage (NEVER DO THIS IN REAL CODE):
// xssVulnerable(location.hash.substring(1)); // Attacker controls location.hash

// Insecure eval() usage
function evalVulnerable(userInput) {
  eval(userInput); // Critical code injection vulnerability!
}

// Example usage (NEVER DO THIS):
// evalVulnerable(location.hash.substring(1));

// DOM-based XSS
function domXssVulnerable(userInput) {
  document.write(userInput); // Critical DOM-based XSS
}

// Example usage (NEVER DO THIS):
// domXssVulnerable(location.hash.substring(1));

// Insecure direct object reference (IDOR) - Backend simulation (requires a node.js environment)
const http = require('http');

const server = http.createServer((req, res) => {
  const userId = req.url.split('/')[2]; // Vulnerable: No validation!
  // Imagine a database query here...
  const userData = { id: userId, sensitiveData: 'very secret' }; // Simulate data retrieval

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(userData)); // IDOR: Sensitive data exposed!
});

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// Prototype Pollution.
function prototypePollution(userInput) {
    const obj = {};
    const polluted = JSON.parse(userInput);
    Object.assign(obj, polluted);
    console.log(obj.polluted);
}

// Example usage.
// prototypePollution('{"__proto__": {"polluted": "yes"}}');

// Denial of Service (DoS) - Regular Expression
function regexDoS(userInput) {
  const regex = /^(a+)+$/; // Vulnerable to catastrophic backtracking
  return regex.test(userInput);
}

// Example usage that can hang the browser.
// regexDoS("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!");

// Unsafe use of localStorage.
function unsafeLocalStorage(userInput) {
    localStorage.setItem('sensitiveData', userInput); // stored in plain text.
    return "Data stored.";
}

// Example usage.
// unsafeLocalStorage("very secret data");

// Unsafe use of setTimeout/setInterval.
function unsafeTimeout(userInput){
  setTimeout(userInput, 1000); // code injection
}

// Example usage.
// unsafeTimeout("alert(document.cookie)");
