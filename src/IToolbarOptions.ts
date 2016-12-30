namespace IIIFComponents{
    export interface IToolbarOptions extends _Components.IBaseComponentOptions {
        direction?: string; // vertical or horizontal
        buttons?: any; // array of button objects with props: id,label,selected
        //multiple?: boolean; // for behavior of radio buttons, set to false
    }
}
