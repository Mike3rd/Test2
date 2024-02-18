/* ===================================================================
 * Mike Turko 1.0.0 - Main JS
 *
 *
 * ------------------------------------------------------------------- */
//in your Javascript file.
if (typeof window?.cronbot !== undefined) {
    const cronbot = window.cronbot;
    //here you can set name and email address, note: both are compulsory.
    cronbot?.user.setUser({ name: "user's name", email: "user's email" });
}