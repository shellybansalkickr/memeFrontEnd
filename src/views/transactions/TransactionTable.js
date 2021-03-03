
import React from 'react';
import { TablePagination } from 'react-pagination-table';
import { Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';


//Table header
const Header = ["Name", "Age", "Size", "Phone", "Gender"];


export class TransactionTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            trnData: []
        }
    }
    setDate = (e) => {
        this.setState({ date: e.target.value });
    }
    fetchData = () => {
        axios.get("/api/fetchTransactionByDate", {
            params: {
                date: this.state.date
            }
        })
            .then(response => {
                this.setState({ trnData: response.data });
            }, (error) => {

            });
    }

    render() {
        const Header = ['TxnId', 'TimeStamp', 'MeMe Id', 'Mobile', 'Coins', 'Amount', 'Status']
        return (
            <div style={{ backgroundColor: 'white', padding: '20px' }}>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="selecteDate" >
                        <Form.Control type="date" placeholder="Transaction Date" max={moment().format("YYYY-MM-DD")} value={this.state.date} onChange={this.setDate} required />
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <Button onClick={this.fetchData}>Search</Button>
                    </Form.Group>
                </Form.Row>
                <TablePagination
                    title="Transactions"
                    headers={Header}
                    data={this.state.trnData}
                    columns="txnId.txnTime.memeId.number.coins.amount.status"
                    perPageItemCount={1}
                    totalCount={this.state.trnData.length}

                />
            </div>
        )
    }
}