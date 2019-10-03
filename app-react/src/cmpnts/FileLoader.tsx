import * as React from 'react';
const axios = require('axios');


export interface IAppProps {
    onChange?: any
}

export interface IAppState {
    uploading: boolean,
    images: Array<any>
}

export default class App extends React.Component<IAppProps, IAppState> {

    state = {
        uploading: false,
        images: []
      }
    
      onChange = (e: any) => {
        const files: any = Array.from(e.target.files)
        this.setState({ uploading: true })
    
        let formData = new FormData()
    
        // files.forEach((file: any, i:any) => {
          formData.append('test', files[0])
        // })

        const s = formData

        // axios.post('http://localhost:3004/base/api/upload', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        const config = {
            method: 'post',
            url: 'http://localhost:3004/base/api/upload',
            data: formData,
            // config: { headers: {'Content-Type': 'multipart/form-data' }}
            }

        axios(config)
            .then((response: any) => {
                //handle success
                console.log(response);
                this.setState({
                    uploading: false,
                })
            })
            .catch((response: any ) => {
                //handle error
                console.log(response);
                this.setState({
                    uploading: false,
                })
            })
            .then((response: any) => {
                //handle success
                console.log('end')
            });
    
        // fetch(`http://localhost:3004/base/api/upload`, {
        //   method: 'POST',
        //   body: formData
        // })
        // .then(res => res.json())
        // .then(images => {
        //   this.setState({ 
        //     uploading: false,
        //     images
        //   })
        // })
      }






    public render() {
        return (
            <div>
                <input type='file' id='multi' onChange={this.onChange} />
                {this.state.uploading.toString()}
            </div>
        );
    }
}
