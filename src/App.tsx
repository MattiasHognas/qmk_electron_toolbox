import React, { PureComponent } from 'react';
import { AppProps } from './types/AppProps';
import { AppState } from './types/AppState';
import { Microcontroller } from './types/Microcontroller';
import logo from './icon-128x128.png';
import { Button, SelectField, FileUpload, TextField } from 'react-md';
import './styles/App.scss';

// TODO: Move to service (Base list arch/OS)
const OBJECT_ITEMS: Microcontroller[] = [
    {
        label: 'Alps',
        value: 'Alps',
    },
    {
        label: 'Cherry',
        value: 'Cherry',
    },
    {
        label: 'Topre',
        value: 'Topre',
    },
];

export default class App extends PureComponent<AppProps, AppState> {
    progressTimeout = 0;
    uploadProgressTimeout = 0;

    constructor(props: AppProps) {
        super(props);
        this.state = {
            fileName: '',
            microcontroller: OBJECT_ITEMS[0],
        };
    }

    componentDidMount(): void {
        window.api.attachTestResponseListener((event, message) => {
            console.log('test-response recieved', event, message);
        });
    }

    sendRequest(): void {
        window.api.sendTestRequest();
    }

    componentWillUnmount(): void {
        window.api.removeTestResponseListener();
    }

    handleChange = (file: File | File[] | null): void => {
        if (file instanceof File) {
            this.setState({ fileName: file.name });
        }
    };

    render(): JSX.Element {
        return (
            <div className="app">
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                </header>
                <main>
                    <div>
                        <FileUpload
                            id="local-file-upload"
                            label="Local file"
                            accept="*/*"
                            onChange={this.handleChange}
                            name="file"
                            className="local-file"
                            primary
                            iconBefore
                            multiple={false}
                        />
                        <TextField
                            id="local-file-field"
                            placeholder="No file chosen"
                            defaultValue={this.state.fileName}
                            className="local-file-field"
                        />
                    </div>
                    <div>
                        <SelectField
                            id="microcontroller-select-field"
                            label="Microcontroller"
                            placeholder="Placeholder"
                            className="md-cell"
                            menuItems={OBJECT_ITEMS}
                            simplifiedMenu={this.props.simplifiedMenu}
                        />
                    </div>
                    <div>
                        <Button raised onClick={this.sendRequest}>
                            test
                        </Button>
                    </div>
                </main>
            </div>
        );
    }
}
