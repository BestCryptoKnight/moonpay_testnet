// import node modules
import React from 'react';

// import mui modules
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from '@mui/material';

// import styles
import { CurrencyCardStyle } from './index.style';

// import models
import { ICurrency } from '../../models';

type Props = {
    currency: ICurrency;
};

const CurrencyCardComponent: React.FC<Props> = ({ currency }) => {
    return (
        <CurrencyCardStyle>
            <Card sx={{ maxWidth: 275 }} className="card-box">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        { currency.type }
                    </Typography>
                    <Typography variant="h5" component="div">
                        { currency.name }
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        { currency.code }
                    </Typography>
                    {/* <Typography variant="body2">
                        precision: { currency.precision }
                        <br />
                    </Typography> */}
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </CurrencyCardStyle>
    );
};

export default CurrencyCardComponent;