import * as React from "react";
import Container = createjs.Container;
import DisplayObject = createjs.DisplayObject;
import Shape = createjs.Shape;
import Bitmap = createjs.Bitmap;
import Rectangle = createjs.Rectangle;
import Matrix2D = createjs.Matrix2D;
import Stage = createjs.Stage;
import Shadow = createjs.Shadow;
import Filter = createjs.Filter;
import BitmapCache = createjs.BitmapCache;
import Graphics = createjs.Graphics;
import {CanvasHTMLAttributes, HTMLAttributes} from "react";

export type DisplayObjectProps = {
    // properties
    alpha?: number;
    bitmapCache?: BitmapCache;
    cacheCanvas?: HTMLCanvasElement | Object;
    cacheID?: number;
    compositeOperation?: string;
    cursor?: string;
    filters?: Filter[];
    hitArea?: DisplayObject;
    id?: number;
    mask?: Shape;
    mouseEnabled?: boolean;
    name?: string;
    //parent: Container;
    regX?: number;
    regY?: number;
    rotation?: number;
    scaleX?: number;
    scaleY?: number;
    shadow?: Shadow;
    skewX?: number;
    skewY?: number;
    snapToPixel?: boolean;
    stage?: Stage;
    tickEnabled?: boolean;
    transformMatrix?: Matrix2D;
    visible?: boolean;
    x?: number;
    y?: number;
    onAdded?: (ev: createjs.MouseEvent) => void
    onClick?: (ev: createjs.MouseEvent) => void
    onDblClick?: (ev: createjs.MouseEvent) => void
    onMouseDown?: (ev: createjs.MouseEvent) => void
    onMouseOut?: (ev: createjs.MouseEvent) => void
    onMouseOver?: (ev: createjs.MouseEvent) => void
    onPressMove?: (ev: createjs.MouseEvent) => void
    onPressUp?: (ev: createjs.MouseEvent) => void
    onRemoved?: () => void
    onRollOut?: (ev: createjs.MouseEvent) => void
    onRollOver?: (ev: createjs.MouseEvent) => void
    onTick?: () => void
    // easeljs-react extended
    bounds?: {x: number, y: number, width: number, height: number}
}

export class DisplayObjectComponent<N extends DisplayObject, P = {}> extends React.Component<P & DisplayObjectProps> {
    getPublicInstance(): N
}

export type StageProps = {
    autoClear?: boolean;
    canvas?: HTMLCanvasElement | Object;
    drawRect?: Rectangle;
    handleEvent?: Function;
    mouseInBounds?: boolean;
    mouseMoveOutside?: boolean;
    mouseX?: number;
    mouseY?: number;
    nextStage?: Stage;
    onStageMouseDown?: (ev: createjs.MouseEvent) => void
    onStageMouseMove?: (ev: createjs.MouseEvent) => void
    onStageMouseUp?: (ev: createjs.MouseEvent) => void
    onMouseEnter?: (ev: createjs.MouseEvent) => void
    onMouseLeave?: (ev: createjs.MouseEvent) => void
    onTickStart?: (ev: createjs.MouseEvent) => void
    onTickEnd?: (ev: createjs.MouseEvent) => void
    onDrawStart?: (ev: createjs.MouseEvent) => void
    onDrawEnd?: (ev: createjs.MouseEvent) => void
    // easeljs-react extended
    onContainerMounted?: (stage: Stage) => void
    onContainerUpdated?: (stage: Stage) => void
}

export class StageComponent extends React.Component<StageProps & CanvasHTMLAttributes<HTMLCanvasElement>> {
    readonly stage: Stage;
}

export class ContainerComponent extends DisplayObjectComponent<Container, {
    //children: DisplayObject[];
    mouseChildren?: boolean;
    //numChildren: number;
    tickChildren?: boolean;
}> {
}

export class ShapeComponent extends DisplayObjectComponent<Shape, {
    graphics?: Graphics
}> {
}

export class BitmapComponent extends DisplayObjectComponent<Bitmap, {
    image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    sourceRect?: Rectangle;
}> {
}

export type TextProps = {
    color?: string;
    font?: string;
    lineHeight?: number;
    lineWidth?: number;
    maxWidth?: number;
    outline?: number;
    text: string;
    textAlign?: string;
    textBaseline?: string;
} & DisplayObjectProps;

export class TextComponent extends DisplayObjectComponent<createjs.Text, TextProps> {
}
