import React, { Component } from 'react';

import getRepos from './utils'
import FileList from './FileList'
import SadResultMessage from './SadResultMessage'

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress';

class PopularJar extends Component {
  state = {
    repoName: '',
    fileExtension: '',
    fileList: [],
    showResults: false,
    isWorking: false,
    noResults:false,
    error: false
  }

  resetState(){
    this.setState({      
      fileList: [],
      showResults: false,
      isWorking: false,
      noResults:false,
      error: false
    })
  }

  handleRepoNameChange = (e) => {
    const repoName = e.target.value

    this.setState(() => ({
      repoName
    }))
  }

  handleFileExtentionChange = (e) => {
    const fileExtension = e.target.value

    this.setState(() => ({
      fileExtension
    }))
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { repoName, fileExtension } = this.state

    this.setState({
      isWorking: true,
    })

    // ("gradle-dev", ".png")
    var list = await getRepos(repoName, fileExtension)
    
    if (list.length > 0) {
      this.setState({
        fileList: list,
        isWorking: false,
        showResults: true
      })
    } else {
      this.setState({
        isWorking: false,
        showResults: false,
        noResults: true
      })
    }
  }

  render() {
    const { repoName, fileExtension, showResults, fileList, isWorking, noResults, error } = this.state

    return (
      <div className="centerBox">
        <Paper className='questionCard centerBox bottomMargin'>
          <Typography variant="title" className='center'>Get Popular Files</Typography>

          <TextField
            placeholder="Repository Name"
            onChange={this.handleRepoNameChange}
            className='bottomMargin'
            value={repoName}
            required={true}
            margin="normal" />

          <TextField
            placeholder="File Extension"
            onChange={this.handleFileExtentionChange}
            value={fileExtension}
            className='bottomMargin'
            margin="normal"
            required />

          <div className='wrapper'>
            <Button
              variant="contained"
              color="primary"
              margin="normal"
              onClick={this.handleSubmit}
              disabled={repoName === '' || fileExtension === '' || this.state.isWorking}>

              Submit
            </Button>
          </div>
        </Paper>          
      
        {isWorking && <CircularProgress size={50} />}

        {showResults && <FileList fileList={fileList} />}
 
        {noResults && <SadResultMessage heading="We didn't find anything"
                         content="But try the gradle-dev repo with .png files"/>}

        {error && <SadResultMessage heading="Oops"
                         content="Looks like something went wrong on our end."/>}

      </div>
    );
  }
}

export default PopularJar;
