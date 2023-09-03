//deviceDeterminator.js Taptapir Utilities by RangerRhino23

// How To Use

// Setup: Before <script src="taptapir.js">, put <script src="taptapir-utilities/deviceDeterminator.js"></script>

// What it does: It will orientate the window vertical if your on a phone or horitzonal for computer

const isPhone = /(iPhone|Android|BlackBerry|Windows Phone)/i.test(navigator.userAgent);
if (typeof isPhone === "boolean" && isPhone) {
    //On phone
    set_orientation('vertical');
} else {
    //On computer
    set_orientation('horizontal');
}