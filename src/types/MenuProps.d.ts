export interface MenuProps {
    LocalFile: string;
    Microcontroller: string;
    Keyboard: string;
    Keymap: string;
    DFU: boolean;
    Halfkay: boolean;
    STM32: boolean;
    Caterina: boolean;
    Flashwhenready: boolean;
    Autoflash: boolean;
    Microcontrollers: string[];
    Keyboards: string[];
    HandleLocalfileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    HandleMicrocontrollerChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
    HandleKeyboardChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
    HandleDFUChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    HandleHalfkayChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    HandleSTM32Change: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    HandleCaterinaChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    HandleFlashwhenreadyChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    HandleAutoflashChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    HandleLoadClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    HandleFlashClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    HandleResetClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
