import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CircularProgress from '@material-ui/core/CircularProgress';

class FileList extends Component {
    render() {
        const { fileList } = this.props

        return (
            <Paper>               
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>File Name</TableCell>
                            <TableCell numeric>Download Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fileList.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">
                                        {n.uri.substring(n.uri.lastIndexOf('/') + 1)}
                                    </TableCell>
                                    <TableCell numeric>{n.downloadCount}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}


export default (FileList)