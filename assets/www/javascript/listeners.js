/**
 * Contains listener initialization for the scan, map 
 * and preferences screens. (more to come)
 *
 */

function initListeners() {
  window.onload = function() {
    document.getElementById("scan").addEventListener("touchstart", initCodeScan, false);
    document.getElementById("default-link").addEventListener("touchstart", initDefault, false); 
    document.getElementById("prefs-link").addEventListener("touchstart", initPreferences, false); 
  }
}