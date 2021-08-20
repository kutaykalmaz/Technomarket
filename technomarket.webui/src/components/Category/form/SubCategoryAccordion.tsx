import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';
import { ProductBasicModel, SubCategory } from '../../../app/models/category';
import { Avatar, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import { ISelectedSubCategory } from '../../../pages/admin/CreateCategoryPage';
import { toast } from 'react-toastify';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    table: {
        minWidth: 1000,
    }
}));

interface Props {
    subCategory: SubCategory,
    category: string
}

const SubCategoryAccordion = ({ subCategory, category }: Props) => {
    const classes = useStyles();

    const { subCategoryStore } = useStore()
    const { setSelectedSubCategory, deleteSubCategory } = subCategoryStore

    const handleEditSubCategory = (id: string, name: string) => {
        setSelectedSubCategory({ id: id, name: name, category: category })
    }

    const handleDeleteSubCategory = (subCategory: ISelectedSubCategory, products: ProductBasicModel[]) => {
        let deletable = products.length > 0 ? false : true;
        if (deletable) {
            deleteSubCategory(subCategory).then(() => toast.success('Alt kategori başarıyla silindi'))
        } else {
            toast.error('Bazı ürünler bu alt kategoriye ait olduğu için silemezsiniz.')
        }
    }


    return (
        <Accordion>
            <AccordionSummary
                expandIcon={subCategory.products.length > 0 && <ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>
                    <Box component="span" marginRight={2}>
                        {subCategory.name}
                    </Box>
                    <IconButton aria-label="edit" size='small'>
                        <EditIcon color='primary' onClick={() => handleEditSubCategory(subCategory.id, subCategory.name)} />
                    </IconButton>

                    <IconButton aria-label="delete" size='small'>
                        <DeleteIcon color='secondary' onClick={() => handleDeleteSubCategory({ id: subCategory.id, name: subCategory.name, category: category }, subCategory.products)} />
                    </IconButton>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component='span'>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>Ürün Adı</TableCell>
                                    <TableCell align="right">Ürün Adeti</TableCell>
                                    <TableCell align="right">Ürün Fiyatı (₺)</TableCell>
                                    <TableCell align="right">Onaylı</TableCell>
                                    <TableCell align="right">Anasayfa</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {subCategory.products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <Avatar src={product.photos[0].url} variant="square" />
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Link to={`/products/${product.id}`} target='_blank'>{product.name}</Link>
                                        </TableCell>
                                        <TableCell align="right">{product.quantity}</TableCell>
                                        <TableCell align="right">{product.price}</TableCell>
                                        <TableCell align="right">
                                            <Checkbox readOnly checked={product.isApproved} />
                                        </TableCell>
                                        <TableCell align="right">
                                            <Checkbox readOnly checked={product.isHome} />
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default observer(SubCategoryAccordion)