"use client"
import Money from '../../utils/money/money';
import CardValue from '../../components/cardValue';
import GraphicDash from '../../components/graphicDash';
import Card, {
    CardActions,
    CardBody,
    CardHeader,
    CardLabel,
    CardTitle,
} from '../../components/bootstrap/Card';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export const Faturamento = () => {

    let credit = 0;
    let debit = 0;
    let money = 0;
    let total = 0;

    return (
        <Card stretch>
            <CardHeader>
                <CardLabel >
                    <div className="d-flex align-items-end ">
                        <CardTitle className='d-flex flex-row align-items-center'>
                            {/* <Icon className='me-2' icon='PieChart' color='dark' size={'2x'} ></Icon> */}
                            <CardActions className='fs-4'>FATURAMENTO</CardActions>
                        </CardTitle>
                    </div>
                </CardLabel>
            </CardHeader>
            <CardBody className='row'>
                <div className='col-sm-12 col-xxl-6'>

                    <Skeleton
                        count={1}
                        circle={true}
                        style={{
                            width: 320,
                            height: 320,
                            marginBottom: '10px',
                            borderRadius: 50,
                            marginLeft: '10px'
                        }}
                    />
                    :
                    <GraphicDash
                        labels={['Crédito', 'Débito', 'Dinheiro']}
                        series={[
                            credit || 0.0001,
                            debit || 0,
                            money || 0,
                        ]}
                    />

                </div>
                <div className='col-xxl-6'>
                    <div className='row'>
                        <div className='col-md-12 fw-bold'>
                            <Skeleton count={1} style={{ height: '110px', borderRadius: '10px', marginBottom: '10px' }} />
                            :
                            <CardValue
                                label='TOTAL FATURADO'
                                value={Money.maskMoney(total)}
                                description={''}
                            />
                        </div>
                        <div className='col-md-6 fw-bold'>
                            <Skeleton count={1} style={{ height: '110px', borderRadius: '10px', marginBottom: '10px' }} />
                            :
                            <CardValue
                                color=''
                                label='CRÉDITO'
                                description=''
                                value={Money.maskMoney(credit || 0)}
                            />

                        </div>
                        <div className='col-md-6 fw-bold'>
                            <Skeleton count={1} style={{ height: '110px', borderRadius: '10px', marginBottom: '10px' }} />
                            :
                            <CardValue
                                color=''
                                label='DÉBITO'
                                description=''
                                value={Money.maskMoney(debit || 0)}
                            />

                        </div>
                        <div className='col-md-6 fw-bold '>

                            <Skeleton count={1} style={{ height: '110px', borderRadius: '10px', marginBottom: '10px' }} />
                            :
                            <CardValue
                                color=''
                                label='DINHEIRO'
                                description=''
                                value={Money.maskMoney(money || 0)}
                            />

                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
