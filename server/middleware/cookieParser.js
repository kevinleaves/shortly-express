const parseCookies = (req, res, next) => {
  // take the incoming cookies out of the request, shape them into an obj and
  // assign them to the cookies property of the original request object.

  /**
   * middleware functions can perform the following tasks:
   *  execute any code
   *  modify the request and response objects
   *  end the request/response cycle
   *  call the next middleware in the stack by calling next()
   */

  const cookieString = req.headers.cookie;
  const parsed = {};

  let hasCookies = true;

  if (!cookieString) {
    hasCookies = false;
  }

  if (hasCookies) {
    const cookies = cookieString.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      const [key, value] = cookie.split('=');
      parsed[key] = value;
    }
  }

  req.cookies = parsed;
  next();
};

module.exports = parseCookies;

// i:
//   cookie: 'shortlyid=18ea4fb6ab3178092ce936c591ddbb90c99c9f66; otherCookie=2a990382005bcc8b968f2b18f8f7ea490e990e78; anotherCookie=8a864482005bcc8b968f2b18f8f7ea490e577b20'

// 'shortlyid=18ea4fb6ab3178092ce936c591ddbb90c99c9f66; otherCookie=2a990382005bcc8b968f2b18f8f7ea490e990e78; anotherCookie=8a864482005bcc8b968f2b18f8f7ea490e577b20'

// o:
/* +{
  +  "anotherCookie": "8a864482005bcc8b968f2b18f8f7ea490e577b20"
  +  "otherCookie": "2a990382005bcc8b968f2b18f8f7ea490e990e78"
  +  "shortlyid": "18ea4fb6ab3178092ce936c591ddbb90c99c9f66"
  +}
*/
