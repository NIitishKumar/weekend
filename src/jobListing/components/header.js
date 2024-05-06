import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { FILTER_JOBS } from '../../redux/features/actions';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Header() {

    const dispatch = useDispatch();
    const [active, setactive] = React.useState(0)
    const filterHandler = (filter, index) => {
        dispatch({ type: FILTER_JOBS, filter })
        setactive(index)
    }

    return (
        <div className='header'>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={5}
            >
                <Item className={`headerItem ${active === 1 ? "headerItemActive" : ""}`} onClick={() => filterHandler("minExp", 1)}>Min experience</Item>
                <Item className={`headerItem ${active === 2 ? "headerItemActive" : ""}`} onClick={() => filterHandler("companyName", 2)}>Company name</Item>
                <Item className={`headerItem ${active === 3 ? "headerItemActive" : ""}`} onClick={() => filterHandler("location", 3)}>Location</Item>
                <Item className={`headerItem ${active === 4 ? "headerItemActive" : ""}`} onClick={() => filterHandler("remote", 4)}>Remote/on-site</Item>
                <Item className={`headerItem ${active === 5 ? "headerItemActive" : ""}`} onClick={() => filterHandler("jobRole", 5)}>Tech stack</Item>
                <Item className={`headerItem ${active === 6 ? "headerItemActive" : ""}`} onClick={() => filterHandler("jobRole", 6)}>Role</Item>
                <Item className={`headerItem ${active === 7 ? "headerItemActive" : ""}`} onClick={() => filterHandler("minJdSalary", 7)}>Min base pay</Item>
            </Stack>
        </div>
    );
}