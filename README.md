## Native Toast Message

The Toast component provides a way to display temporary messages or notifications to the user.

## Features:

### Type (string, default: 'success')

-   Specifies the type of the toast. Available values: success, error, warning, info, plain.
-   To extend or overwrite toast types, refer to the documentation for details.

### Title (string)

-   Sets the first line of text for the toast message.

### Body (string)

-   Sets the second line of text for the toast message.

### Position (string, default: 'top')

-   Determines the position of the toast on the screen. Available values: top, bottom.

### Visibility Time (number, default: 4000)

-   Specifies the number of milliseconds after which the toast automatically hides.
-   This prop takes effect only when autoHide is set to true.

### Auto Hide (boolean, default: true)

-   When set to true, the toast will automatically hide after the specified visibilityTime milliseconds.

### Show (boolean)

-   Set to true to show the Toast. It will be set to false when closed.

### Top Offset (number, default: 40)

-   Sets the offset from the top of the screen (in pixels).
-   This prop has an effect only when the position is set to top.

### Bottom Offset (number, default: 40)

-   Sets the offset from the bottom of the screen (in pixels).
-   This prop has an effect only when the position is set to bottom.

### Keyboard Offset (number, default: 10)

-   Sets the offset from the keyboard (in pixels). This prop is only applicable when the position is set to bottom, and
    the keyboard is visible (iOS only).

### On Hide (() => void)

-   A callback function that is called when the toast hides.

### On Press (() => void)

-   A callback function that is called when the toast is pressed.

## Style

Style can be set.

```ts
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

interface ToastStyleLib {
    leadingBorder?: ViewStyle;
    content?: ViewStyle;
    text1?: TextStyle;
    text2?: TextStyle;
}
```

For example

```ts
export const ToastStyleCustom = {
    modal: {
        transparent: false
    },
    toast: {
        success: {
            text1: { fontSize: "green" }
        },
        waning: {
            leadingBorder: { borderLeftColor: "pink" }
        },
        plain: {
            leadingBorder: { borderLeftColor: "yellow" }
        }
    }
};
```

#### Issues, suggestions and feature requests

https://github.com/bharathidas/NativeToastMessage/issues

#### Screenshots

![Screenshot_1](https://github.com/bharathidas/NativeToastMessage/assets/23263603/0199124f-8f99-463b-8565-64417ec23a60)
![Screenshot_2](https://github.com/bharathidas/NativeToastMessage/assets/23263603/572e4001-5f48-4ad0-9761-7fcaa3faa9b4)
![Screenshot_3](https://github.com/bharathidas/NativeToastMessage/assets/23263603/2d86ab98-0095-4297-bb6d-20339967cae7)
![Screenshot_4](https://github.com/bharathidas/NativeToastMessage/assets/23263603/631a3833-9679-4a5f-a1be-89c54a61ff28)
![Screenshot_5](https://github.com/bharathidas/NativeToastMessage/assets/23263603/7d8d9f8d-0c84-4d7f-b5d2-bdc2f0b29eca)
![Screenshot_6](https://github.com/bharathidas/NativeToastMessage/assets/23263603/49842bd7-7e1b-4547-8a3f-5c70c0f13015)
