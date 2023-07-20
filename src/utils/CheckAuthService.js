const CheckAuthService = (token) => {
  // CASE-SENSITIVE
  switch (true) {
    case token.includes("google"):
      return "GOOGLE";
    case token.includes("github"):
      return "GITHUB";
    case token.includes("linkedin"):
      return "LINKEDIN";
    default:
      return "DEFAULT";
  }
};

export default CheckAuthService;