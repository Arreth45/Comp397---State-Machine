﻿module config {

    // State Constants
    export const MENU_STATE: number = 0;
    export const PLAY_STATE: number = 1;
    export const OVER_STATE: number = 2;
    
    //screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTRE_X: number = 320;
        public static CENTRE_Y: number = 240;
    }

    export class Game {
        public static FPS: number = 60;
    }
}