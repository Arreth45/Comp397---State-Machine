var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU Scene
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        //
        function Menu() {
            _super.call(this);
        }
        //start method
        Menu.prototype.start = function () {
            console.log("Game Started");
            this._helloLabel = new createjs.Text("Hello World", "60px Sans", "#000000");
            this._helloLabel.regX = this._helloLabel.getMeasuredWidth() * 0.5;
            this._helloLabel.regY = this._helloLabel.getMeasuredHeight() * 0.5;
            this._helloLabel.x = CScreen.CENTRE_X;
            this._helloLabel.y = CScreen.CENTRE_Y;
            this.addChild(this._helloLabel);
            stage.addChild(this);
        };
        //menu updates
        Menu.prototype.update = function () {
            this._helloLabel.rotation -= 5;
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map