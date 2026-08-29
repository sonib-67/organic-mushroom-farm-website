const ip = "192.168.1.1, 10.0.0.1";
const ipString = Array.isArray(ip) ? ip[0] : ip.split(',')[0].trim();
console.log(ipString);
