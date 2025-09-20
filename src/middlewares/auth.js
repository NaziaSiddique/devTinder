const adminAuth = (req, res, next) => {
  console.log("Admin Auth is being checked!");
  const token = "securityToken";
  const isAdminAuthorised = token === "securityToken";

  if (!isAdminAuthorised) {
    res.status(401).send("Unauthorised User!");
  } else {
    next();
  }
};
const userAuth = (req, res, next) => {
  console.log("User Auth is being checked!");
  const token = "userSecurityToken";
  const isUserAuthorised = token === "userSecurityToken";

  if (!isUserAuthorised) {
    res.status(401).send("Unauthorised User!");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
