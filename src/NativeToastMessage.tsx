import { ReactNode, createElement, useCallback } from "react";

import { NativeToastMessageProps } from "../typings/NativeToastMessageProps";
import { NativeToastMessageInput } from "./components/NativeToastMessageInput";
import { flattenStyles } from "./Utils/Styles";
import { ToastStyle, defaultToastStyle } from "./ui/styles";

const toastTypes = ["success", "info", "warning", "error", "plain"];

export function NativeToastMessage(props: NativeToastMessageProps<ToastStyle>): ReactNode {
    const styles = flattenStyles(defaultToastStyle, props.style) as ToastStyle;

    const toastOnPress = useCallback(
        (whenPressed: boolean): void => {
            if (whenPressed && props.whenPress && props.whenPress.canExecute) {
                props.whenPress.execute();
            }
            props.showAttribute.setValue(false);
        },
        [props.showAttribute, props.whenPress]
    );

    const toastOnHide = useCallback(
        (whenHidden: boolean): void => {
            if (whenHidden && props.whenHide && props.whenHide.canExecute) {
                props.whenHide.execute();
            }
            props.showAttribute.setValue(false);
        },
        [props.showAttribute, props.whenHide]
    );

    const type = (toastTypes.includes(props.typeKey?.value ?? "") ? props.typeKey?.value : "success") || "success";
    const text1 = props.text1Key.value || "";
    const text2 = props.text2Key.value || "";
    const visibilityTime = Number(props.visibilityTimeKey?.value) || 4000;
    const autoHide = props.autoHideKey?.value !== false;
    const topOffset = Number(props.topOffsetKey?.value) || 40;
    const bottomOffset = Number(props.bottomOffsetKey?.value) || 40;
    const keyboardOffset = Number(props.keyboardOffsetKey?.value) || 10;
    const animationType = props.animationTypeKey || "none";
    const position = props.positionKey?.value === "bottom" ? "bottom" : "top";

    if (props.showAttribute.value) {
        return (
            <NativeToastMessageInput
                type={type}
                text1={text1}
                text2={text2}
                position={position}
                visibilityTime={visibilityTime}
                autoHide={autoHide}
                topOffset={topOffset}
                bottomOffset={bottomOffset}
                keyboardOffset={keyboardOffset}
                toastWhenPressed={toastOnPress}
                toastWhenHidden={toastOnHide}
                animationType={animationType}
                style={styles}
            />
        );
    } else {
        return null;
    }
}
