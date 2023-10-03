export async function checkRouteIsExist(to, from, next) {
  let token = localStorage.getItem("token");
  if (["404", "403", "500"].includes((to.name || "").toString())) {
    next();
  }
  // if (token && !loggedIn.value) {
  //   // await authStore.fetchUser();
  // }

  // console.log('role checker: ', checkRole.value, to.meta, user.value)
  // if(!checkRole.value) {
  //   return next({ name: '404' })
  // }
  // if (to.name === "Login" && loggedIn.value) {
  //   return next({ name: "Dashboard" });
  // } else next();
  next();
}
