"use client"
import { useEffect, useState } from 'react';
import api from '../../../api/api';
import Card, { CardActions, CardBody, CardHeader, CardLabel, CardTitle } from '../../components/bootstrap/Card';
import Money from '../../utils/money/money';
import CardValue from '../../components/cardValue';
import GraphicDash from '../../components/graphicDash';
import 'react-loading-skeleton/dist/skeleton.css';
import { Navbar } from '@/components';
import * as React from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface IFaturamento {
    count: number;
    totalValue: number;
    totalValueCredit: number;
    totalValueDebit: number;
    totalValueMoney: number;
}

interface ISale {
    id: number;
    category: string;
    model: string;
    payment_type: string;
    value: number;
    created_at: string;
}

const Geral = () => {
    const [faturamentoDate, setFaturamentoDate] = useState<IFaturamento>();
    const [sales, setSales] = useState<ISale[]>([]);

    useEffect(() => {
        getFaturamento();
        getSales();
    }, []);

    const getFaturamento = async () => {
        try {
            const response = await api.get('/data');
            setFaturamentoDate(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getSales = async () => {
        try {
            const response = await api.get('/sales');
            setSales(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                height: '100vh',
                backgroundColor: '#f8f9fa',
                marginTop: '100px'
            }}>
                <Card style={{
                    width: '700px',
                    height: '860px',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff',
                    marginRight: '20px'
                }}>
                    <CardBody className='row'>
                        <div className='col-sm-12 col-xxl-6'>
                            <GraphicDash
                                labels={['Crédito', 'Débito', 'Dinheiro']}
                                series={[
                                    faturamentoDate?.totalValueCredit || 0.0001,
                                    faturamentoDate?.totalValueDebit || 0,
                                    faturamentoDate?.totalValueMoney || 0,
                                ]}
                            />
                        </div>
                        <div className='col-xxl-6'>
                            <div className='row'>
                                <div className='col-md-12 fw-bold'>
                                    <CardValue
                                        label='TOTAL FATURADO'
                                        value={Money.maskMoney(faturamentoDate?.totalValue || 0)}
                                        description={''}
                                    />
                                </div>
                                <div className='col-md-12 fw-bold'>
                                    <CardValue
                                        label='QUANTIDADE DE VENDAS'
                                        value={faturamentoDate?.count || 0}
                                        description={''}
                                    />
                                </div>
                                <div className='col-md-6 fw-bold'>
                                    <CardValue
                                        color=''
                                        label='CRÉDITO'
                                        description=''
                                        value={Money.maskMoney(faturamentoDate?.totalValueCredit || 0)}
                                    />
                                </div>
                                <div className='col-md-6 fw-bold'>
                                    <CardValue
                                        color=''
                                        label='DÉBITO'
                                        description=''
                                        value={Money.maskMoney(faturamentoDate?.totalValueDebit || 0)}
                                    />
                                </div>
                                <div className='col-md-6 fw-bold '>
                                    <CardValue
                                        color=''
                                        label='DINHEIRO'
                                        description=''
                                        value={Money.maskMoney(faturamentoDate?.totalValueMoney || 0)}
                                    />
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card style={{
                    width: '100%',
                    height: '860px',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff'
                }}>
                    <CardHeader>
                        <CardTitle style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'center',
                            marginBottom: '20px'
                        }}>Vendas</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead> Data</TableHead>
                                    <TableHead>Modelo</TableHead>
                                    <TableHead>Categoria</TableHead>
                                    <TableHead>Pagamento</TableHead>
                                    <TableHead>Valor</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sales.map((sale) => (
                                    <TableRow>
                                        <TableCell >{new Date(sale.created_at).toLocaleDateString()}</TableCell>
                                        <TableCell>{sale.model}</TableCell>
                                        <TableCell>{sale.category}</TableCell>
                                        <TableCell>{sale.payment_type}</TableCell>
                                        <TableCell >{Money.maskMoney(sale.value)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                </Card>

            </div>
        </>
    );
};

export default Geral;
