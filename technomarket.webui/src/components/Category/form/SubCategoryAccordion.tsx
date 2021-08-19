import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { SubCategory } from '../../../app/models/category';
import { Avatar, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Link } from 'react-router-dom'


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
    subCategory: SubCategory
}

const SubCategoryAccordion = ({ subCategory }: Props) => {
    const classes = useStyles();


    return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >

                    <Typography className={classes.heading}>{subCategory.name}</Typography>
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
                                                <Checkbox disabled checked={product.isApproved} />
                                            </TableCell>
                                            <TableCell align="right">
                                                <Checkbox disabled checked={product.isHome} />
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

export default SubCategoryAccordion