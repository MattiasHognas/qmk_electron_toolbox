import React, { PureComponent } from 'react';
import { IAppProps } from './types/IAppProps';
import { IAppState } from './types/IAppState';
import logo from './icon-128x128.png';
import {
  Button,
  SelectField,
  FileUpload,
  TextField
} from 'react-md';
import './styles/App.scss';
import { IMicrocontroller } from './types/IMicroController';

// TODO: Move to service (Base list arch/OS)
const OBJECT_ITEMS: IMicrocontroller[] = [{
  label: 'Alps',
  value: 'Alps',
}, {
  label: 'Cherry',
  value: 'Cherry',
}, {
  label: 'Topre',
  value: 'Topre',
}];

export default class App extends PureComponent<IAppProps, IAppState> {

  progressTimeout: number = 0;
  uploadProgressTimeout: number = 0;

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      fileName: '',
      microcontroller: OBJECT_ITEMS[0]
    };
  }

  componentDidMount() {
    window.api.attachTestResponseListener((event, message) => {
      console.log('test-response recieved', event, message);
    });
  }

  sendRequest() {
    window.api.sendTestRequest();
  }

  componentWillUnmount() {
    window.api.removeTestResponseListener();
  }

  handleChange = (file: File | File[] | null) => {
    if (file instanceof File) {
      this.setState({ fileName: file.name });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
            <Button raised onClick={this.sendRequest}>test</Button>
          </div>
        </main>
      </div>
    );
  }
}
