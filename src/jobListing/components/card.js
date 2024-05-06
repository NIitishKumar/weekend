import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, CardMedia, Chip } from '@mui/material';

export default function Job({ jobDetails }) {
    const { logoUrl, companyName, jobRole, location, minJdSalary, maxJdSalary, jobDetailsFromCompany, minExp } = jobDetails;
    return (
        <Card sx={{ minWidth: 275 }} className='jobCard' >
            <div className='job-span'>
                <Chip size='small' ali label="⏳ Posted 10 days ago" variant="outlined" className='' />

            </div><br />
            <CardContent>
                <div className='cardHeader'>
                    <img
                        className='jobLogo'
                        height={"50px"}
                        width={"40px"}
                        src={logoUrl}
                    />
                    <div className='companyInfo'>
                        <Typography variant="body1" gutterBottom margin={0} color={"text.disabled"} fontWeight={700}>
                            {companyName}
                        </Typography>
                        <Typography variant="h6" gutterBottom margin={0} fontWeight={500}>
                            {jobRole}
                        </Typography>
                        <Typography variant="body2" margin={0} fontWeight={600}>
                            {location}
                        </Typography>
                    </div>
                </div>
                <div className='jobDetails'>
                    <Typography variant='body1' fontWeight={600} marginBottom={"10px"} color='text.secondary'>
                        Estimate Salary : {minJdSalary} - {maxJdSalary} LPA ✅
                    </Typography>
                    <Typography variant='body1' fontWeight={550}>
                        About Company:
                    </Typography>

                    <Typography variant='body2' fontWeight={600}>
                        About us
                    </Typography>

                    <Typography variant='body2' fontWeight={500} align='left' color={"text.primary"} >
                        {jobDetailsFromCompany}
                    </Typography>
                    <div className='viewMore'>
                        <Typography variant='body2' margin={0} fontWeight={600}>
                            View job
                        </Typography>
                    </div>
                </div>
                <div className='jobDetails'>
                    <Typography variant='body1' fontWeight={500} marginBottom={"10px"} color='text.secondary' margin={0}>
                        Minimun Experience
                    </Typography>
                    <Typography variant='body2' margin={0}>
                        {minExp} Years
                    </Typography>
                </div>
                <div className='jobActions'>
                    <Button size="medium" fullWidth color="success" variant="contained" sx={{ backgroundColor: "#54efc2", color: "black", fontWeight: "600" }}>⚡️Easy Apply</Button>
                    <Button size="medium" color="success" variant="contained" sx={{ backgroundColor: "#4943da", color: "white", fontWeight: "500" }} >
                        <img className="profileImg" width={"20px"} src="man.jpeg" alt="man profile" />  &nbsp;
                        <img className="profileImg" width={"20px"} src='woman.jpg' alt="girl profile" />
                        Uploac Referral asks
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}