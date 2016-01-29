var config;
(function (config) {
    // State Constants
    config.MENU_STATE = 0;
    config.PLAY_STATE = 1;
    config.OVER_STATE = 2;
    //screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTRE_X = 320;
        Screen.CENTRE_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map