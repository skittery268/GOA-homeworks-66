const parseCookies = (cookieHeader) => {
    const cookies = {};

    if (!cookieHeader) return cookies;

    cookieHeader.split(";").forEach((part) => {
        const index = part.indexOf("=");

        if (index < 0) return;

        const name = part.slice(0, index).trim();
        const value = part.slice(index + 1).trim();

        if (!name) return;

        try {
            cookies[name] = decodeURIComponent(value);
        } catch {
            cookies[name] = value;
        }
    });

    return cookies;
}

module.exports = parseCookies;
