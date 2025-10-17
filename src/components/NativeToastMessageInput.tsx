import { ReactNode, useCallback, useEffect, useState, createElement } from "react";
import { Modal, ModalProps, TouchableWithoutFeedback, View } from "react-native";
import Toast, {
    BaseToast,
    BaseToastProps,
    ToastConfig,
    SuccessToast,
    ErrorToast,
    InfoToast
} from "react-native-toast-message";

import { ToastStyle, ToastStyleLib } from "../ui/styles";

export interface NativeToastMessageProps {
    type: string;
    text1: string;
    text2: string;
    position: "top" | "bottom";
    visibilityTime?: number;
    autoHide?: boolean;
    topOffset?: number;
    bottomOffset?: number;
    keyboardOffset?: number;
    toastWhenPressed: (whenPressed: boolean) => void;
    toastWhenHidden: (whenHidden: boolean) => void;
    animationType: ModalProps["animationType"];
    style?: ToastStyle;
}

const mergeStyle = (props: BaseToastProps, extraStyle?: ToastStyleLib): BaseToastProps => {
    const p = props;
    if (extraStyle?.leadingBorder) {
        p.style = extraStyle?.leadingBorder;
    }
    if (extraStyle?.content) {
        p.contentContainerStyle = extraStyle?.content;
    }
    if (extraStyle?.title) {
        p.text1Style = extraStyle?.title;
    }
    if (extraStyle?.body) {
        p.text2Style = extraStyle?.body;
    }
    return p;
};

export function NativeToastMessageInput(props: NativeToastMessageProps): ReactNode {
    const [isToastVisible, setIsToastVisible] = useState(false);
    const toastStyle = props.style?.toast ?? {};

    const toastConfig: ToastConfig = {
        success: (props: BaseToastProps) => <SuccessToast {...mergeStyle(props, toastStyle.success)} />,
        info: (props: BaseToastProps) => <InfoToast {...mergeStyle(props, toastStyle.info)} />,
        warning: (props: BaseToastProps) => <BaseToast {...mergeStyle(props, toastStyle.waning)} />,
        error: (props: BaseToastProps) => <ErrorToast {...mergeStyle(props, toastStyle.error)} />,
        plain: (props: BaseToastProps) => <BaseToast {...mergeStyle(props, toastStyle.plain)} />
    };

    const toastOnPress = useCallback((): void => {
        props.toastWhenPressed(true);
        if (props.autoHide === false) {
            Toast.hide();
        }
    }, [props]);

    const toastOnHide = useCallback((): void => {
        setIsToastVisible(false);
        props.toastWhenHidden(true);
    }, [props]);

    useEffect(() => {
        setIsToastVisible(true);
    }, []);

    useEffect(() => {
        if (isToastVisible) {
            Toast.show({
                type: props.type,
                text1: props.text1,
                text2: props.text2,
                position: props.position,
                visibilityTime: props.visibilityTime,
                autoHide: props.autoHide,
                topOffset: props.topOffset,
                bottomOffset: props.bottomOffset,
                keyboardOffset: props.keyboardOffset,
                onPress: toastOnPress,
                onHide: toastOnHide
            });
        }
    }, [isToastVisible, props, toastOnHide, toastOnPress]);

    const transparent = props.style?.modal?.transparent ?? true;
    const backdropColor = transparent ? "rgba(0, 0, 0, 0.0)" : props.style?.modal?.backdropColor;

    return (
        <Modal visible={isToastVisible} animationType={props.animationType} transparent onRequestClose={toastOnHide}>
            <TouchableWithoutFeedback onPress={toastOnHide}>
                <View style={{ flex: 1, backgroundColor: backdropColor }}>
                    <Toast config={toastConfig} />
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}
