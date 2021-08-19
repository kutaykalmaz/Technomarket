import React, { Dispatch, SetStateAction } from 'react'
import { observer } from 'mobx-react-lite'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Row from './CreateCategoryListRow'
import { Category } from '../../../app/models/category';
import { ISelectedCategory } from '../../../pages/admin/CreateCategoryPage';

interface Props {
    category: Category[],
    setSelectedCategory: Dispatch<SetStateAction<ISelectedCategory>>

}

const CreateCategoryList = ({ category, setSelectedCategory }: Props) => {

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Ad</TableCell>
                        <TableCell align="center">Güncelle</TableCell>
                        <TableCell align="center">Sil</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {category.map((category) => (
                        <Row key={category.id} category={category} setSelectedCategory={setSelectedCategory} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default observer(CreateCategoryList)
