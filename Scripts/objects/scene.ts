module objects {
    //Scene Class 
    export class Scene extends createjs.Container {
        //Constructor +++++++++++++++++++++++++++++
        constructor() {
            super();
            this.start();
        }
        
        // Add game objects to my scene in this method
        public start(): void {
            stage.addChild(this);
        }
        
        //update gmae objects in scene
        public update(): void {

        }
    }
}