import React, { useState, Dispatch, SetStateAction } from 'react'
import { observer } from 'mobx-react-lite'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { FiEdit3 } from 'react-icons/fi'
import { MdDeleteForever } from 'react-icons/md'
import { Category, SubCategory } from '../../../app/models/category';
import { ISelectedCategory } from '../../../pages/admin/CreateCategoryPage';
import { useStore } from '../../../app/stores/store';
import { CircularProgress } from '@material-ui/core';
import { toast } from 'react-toastify'
import SubCategoryAccordion from './SubCategoryAccordion'

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

interface Props {
    category: Category,
    setSelectedCategory: Dispatch<SetStateAction<ISelectedCategory>>
}


const Row = ({ category, setSelectedCategory }: Props) => {
    const [open, setOpen] = useState(false);
    const [itemForDelete, setItemForDelete] = useState('');
    const classes = useRowStyles();

    const { categoryStore } = useStore()
    const { deleteLoading, deleteCategory } = categoryStore

    const handleSetEdit = (category: Category) => {
        setSelectedCategory({ id: category.id, name: category.name })
    }

    const handleDelete = (category: Category) => {
        let deletable = true;

        category.subCategories?.forEach((subCategory) => {
            if(subCategory.products.length > 0) deletable = false; 
        })

        if (deletable) {
            setItemForDelete(category.id)
            deleteCategory(category.id).then(() => toast.success('Kategori başarıyla silindi'));
        } else {
            toast.error('Bazı ürünler bu kategoriye ait olduğu için silemezsiniz.')
        }

    }

    return (
        <>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {category.subCategories && category.subCategories.length > 0 && (open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />)}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {category.name}
                </TableCell>
                <TableCell align="center">
                    <FiEdit3 style={{ color: '#3f51b5', fontSize: '20px', cursor: 'pointer' }} onClick={() => handleSetEdit(category)} />
                </TableCell>
                <TableCell align="center">
                    {
                        (category.id === itemForDelete && deleteLoading) ? <CircularProgress size='1rem' /> :
                            <MdDeleteForever style={{ color: '#e53935', fontSize: '20px', cursor: 'pointer' }} onClick={(e) => handleDelete(category)} />
                    }
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Alt Kategoriler
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    {category.subCategories && category.subCategories.map((subCategory: SubCategory) => (
                                        <TableRow key={subCategory.id} style={{marginBottom:'10'}}>
                                            <SubCategoryAccordion subCategory={subCategory} category={category.id} />
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default observer(Row)