/*****************************************************************************
 * Game window handling
 *****************************************************************************/
function windowResize() {
    uiGameRedraw();

    return false;
}


/*****************************************************************************
 * Window event handlers
 *****************************************************************************/
window.addEventListener("resize", windowResize);

