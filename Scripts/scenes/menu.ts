// MENU Scene
module scenes {
    export class Menu extends objects.Scene {
        //private variables
        private _helloLabel: createjs.Text;
        //
        constructor() {
            super();
        }

        //start method
        public start(): void {
            console.log("Game Started");

            this._helloLabel = new createjs.Text("Hello World", "60px Sans", "#000000");
            this._helloLabel.regX = this._helloLabel.getMeasuredWidth() * 0.5;
            this._helloLabel.regY = this._helloLabel.getMeasuredHeight() * 0.5;
            this._helloLabel.x = CScreen.CENTRE_X;
            this._helloLabel.y = CScreen.CENTRE_Y;

            this.addChild(this._helloLabel);
            stage.addChild(this);
        }
        //menu updates
        public update(): void {
            this._helloLabel.rotation -= 5;
        }
    }
}