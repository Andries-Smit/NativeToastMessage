import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

export interface ToastStyle extends Style {
    modal: {
        transparent?: boolean;
        // Ignored if transparent is true.
        backdropColor?: string;
    };
    toast: {
        success?: ToastStyleLib;
        error?: ToastStyleLib;
        info?: ToastStyleLib;
        waning?: ToastStyleLib;
        plain?: ToastStyleLib;
    };
}

export interface ToastStyleLib {
    leadingBorder?: ViewStyle;
    content?: ViewStyle;
    title?: TextStyle;
    body?: TextStyle;
}

export const defaultToastStyle: ToastStyle = {
    modal: {
        backdropColor: "rgba(0, 0, 0, 0.3)"
    },
    toast: {
        waning: {
            leadingBorder: { borderLeftColor: "orange" }
        },
        plain: {
            leadingBorder: { borderLeftColor: "white" }
        }
    }
};
