/**
 * This file was generated from NativeToastMessage.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type AnimationTypeKeyEnum = "none" | "slide" | "fade";

export interface NativeToastMessageProps<Style> {
    name: string;
    style: Style[];
    typeKey?: DynamicValue<string>;
    text1Key: EditableValue<string>;
    text2Key: EditableValue<string>;
    positionKey?: DynamicValue<string>;
    visibilityTimeKey?: DynamicValue<Big>;
    autoHideKey?: DynamicValue<boolean>;
    showAttribute: EditableValue<boolean>;
    topOffsetKey?: DynamicValue<Big>;
    bottomOffsetKey?: DynamicValue<Big>;
    keyboardOffsetKey?: DynamicValue<Big>;
    animationTypeKey: AnimationTypeKeyEnum;
    whenPress?: ActionValue;
    whenHide?: ActionValue;
}

export interface NativeToastMessagePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    typeKey: string;
    text1Key: string;
    text2Key: string;
    positionKey: string;
    visibilityTimeKey: string;
    autoHideKey: string;
    showAttribute: string;
    topOffsetKey: string;
    bottomOffsetKey: string;
    keyboardOffsetKey: string;
    animationTypeKey: AnimationTypeKeyEnum;
    whenPress: {} | null;
    whenHide: {} | null;
}
