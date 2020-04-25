import React from 'react';
import { AppProps } from './types/AppProps';
import { AppState } from './types/AppState';
import './styles/App.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import Console from './components/Console';
import Footer from './components/Footer';
import Microcontrollers from './externals/common/microcontrollers.json';
import Keyboards from './externals/common/keyboards.json';
import Keymaps from './externals/common/keymaps.json';

const initialState: AppState = {
    LocalFile: '',
    Microcontroller: '',
    Keyboard: '',
    Keymap: '',
    DFU: false,
    Halfkay: false,
    STM32: false,
    Caterina: false,
    Flashwhenready: false,
    Autoflash: false,
};
export const AppContext: React.Context<AppState> = React.createContext<AppState>(initialState);

export class App extends React.Component<AppProps, AppState> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setLocalfile(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ LocalFile: event.target.value as string });
    }

    setMicrocontroller(event: React.ChangeEvent<{ value: unknown }>): void {
        this.setState({ Microcontroller: event.target.value as string });
    }

    setKeyboard(event: React.ChangeEvent<{ value: unknown }>): void {
        this.setState({ Keyboard: event.target.value as string });
    }

    setKeymap(event: React.ChangeEvent<{ value: unknown }>): void {
        this.setState({ Keymap: event.target.value as string });
    }

    setDFU(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void {
        this.setState({ DFU: checked });
    }

    setHalfkay(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void {
        this.setState({ Halfkay: checked });
    }

    setSTM32(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void {
        this.setState({ STM32: checked });
    }

    setCaterina(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void {
        this.setState({ Caterina: checked });
    }

    setFlashwhenready(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void {
        this.setState({ Flashwhenready: checked });
    }

    setAutoflash(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void {
        this.setState({ Autoflash: checked });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    load(event: React.MouseEvent): void {
        // TODO: implement
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    flash(event: React.MouseEvent): void {
        // TODO: implement
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reset(event: React.MouseEvent): void {
        // TODO: implement
    }

    // componentDidMount(): void {
    //     window.api.attachTestResponseListener((event, message) => {
    //         console.log('test-response recieved', event, message);
    //     });
    // }

    // sendRequest(): void {
    //     window.api.sendTestRequest();
    // }

    // componentWillUnmount(): void {
    //     window.api.removeTestResponseListener();
    // }

    render(): JSX.Element {
        return (
            <div>
                <Header />
                <Menu
                    Microcontrollers={Microcontrollers}
                    Keyboards={Keyboards}
                    Keymaps={Keymaps}
                    HandleLocalfileChange={this.setLocalfile}
                    HandleMicrocontrollerChange={this.setMicrocontroller}
                    HandleDFUChange={this.setDFU}
                    HandleKeyboardChange={this.setKeyboard}
                    HandleKeymapChange={this.setKeymap}
                    HandleHalfkayChange={this.setHalfkay}
                    HandleSTM32Change={this.setSTM32}
                    HandleCaterinaChange={this.setCaterina}
                    HandleFlashwhenreadyChange={this.setFlashwhenready}
                    HandleAutoflashChange={this.setAutoflash}
                    HandleLoadClick={this.load}
                    HandleFlashClick={this.flash}
                    HandleResetClick={this.reset}
                />
                <Console />
                <Footer />
            </div>
        );
    }
}

export default App;
