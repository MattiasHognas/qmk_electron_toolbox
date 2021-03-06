import React from 'react';
import { AppProps } from './types/AppProps';
import { AppState } from './types/AppState';
import './styles/App.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import Console from './components/Console';
import Footer from './components/Footer';
import Microcontrollers from './externals/common/microcontrollers.json';

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.setLocalfile = this.setLocalfile.bind(this);
        this.setMicrocontroller = this.setMicrocontroller.bind(this);
        this.setKeyboard = this.setKeyboard.bind(this);
        this.setDFU = this.setDFU.bind(this);
        this.setHalfkay = this.setHalfkay.bind(this);
        this.setSTM32 = this.setSTM32.bind(this);
        this.setCaterina = this.setCaterina.bind(this);
        this.setFlashwhenready = this.setFlashwhenready.bind(this);
        this.load = this.load.bind(this);
        this.flash = this.flash.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
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
            Keyboards: [],
            KeymapHex: '',
        } as AppState;
    }

    componentDidMount(): void {
        this.getKeyboards().then((value) => this.setKeyboards(value));
    }

    async getKeyboards(): Promise<string[]> {
        const response = await fetch('http://api.qmk.fm/v1/keyboards');
        return await response.json();
    }

    // TODO: Probably do this on backend instead
    async getKeymapHex(): Promise<string> {
        console.log('first v', this.state.Keyboard);
        const keymap = this.state.Keyboard.replace(/\//g, '_');
        console.log('second v', keymap);
        const response = await fetch(`https://qmk.fm/compiled/${keymap}_default.hex`);
        return await response.text();
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

    setLocalfile(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ LocalFile: event.target.value as string });
    }

    setMicrocontroller(event: React.ChangeEvent<{ value: unknown }>): void {
        this.setState({ Microcontroller: event.target.value as string });
    }

    setKeyboard(event: React.ChangeEvent<{ value: unknown }>): void {
        this.setState({ Keyboard: event.target.value as string });
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

    load(event: React.MouseEvent): void {
        if (this.state.Keyboard) {
            this.getKeymapHex().then((value) => {
                this.setKeymapHex(value);
                this.setState({ Keymap: 'default' });
            });
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    flash(event: React.MouseEvent): void {
        // TODO: implement
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reset(event: React.MouseEvent): void {
        // TODO: implement
    }

    setKeyboards(values: string[]): void {
        this.setState({ Keyboards: values });
    }

    setKeymapHex(values: string): void {
        this.setState({ KeymapHex: values });
    }

    render(): JSX.Element {
        return (
            <div>
                <Header />
                <Menu
                    LocalFile={this.state.LocalFile}
                    Microcontroller={this.state.Microcontroller}
                    Keyboard={this.state.Keyboard}
                    Keymap={this.state.Keymap}
                    DFU={this.state.DFU}
                    Halfkay={this.state.Halfkay}
                    STM32={this.state.STM32}
                    Caterina={this.state.Caterina}
                    Flashwhenready={this.state.Flashwhenready}
                    Autoflash={this.state.Autoflash}
                    Microcontrollers={Microcontrollers}
                    Keyboards={this.state.Keyboards}
                    HandleLocalfileChange={this.setLocalfile}
                    HandleMicrocontrollerChange={this.setMicrocontroller}
                    HandleDFUChange={this.setDFU}
                    HandleKeyboardChange={this.setKeyboard}
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
