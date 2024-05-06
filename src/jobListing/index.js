import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import Job from './components/card';
import InfiniteScroll from 'react-infinite-scroll-component'
import { JOB_LISTING } from '../redux/features/actions';
import Header from './components/header';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function JobListing() {
    const {dataList, hasMore, currentPage} = useSelector(state => state?.jobListing);
    const dispatch = useDispatch();


    React.useEffect(() => {
        dispatch({ type: JOB_LISTING })
    }, [])

    const nextPage = () => {
        dispatch({ type: JOB_LISTING, state:{offset:currentPage, limit:20} })      
    }

    return (
        <div>
            <Header />
            <InfiniteScroll
                dataLength={dataList.length}
                next={nextPage}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>

                    </p>
                }
            >
                <Grid container spacing={2} padding={"20px"}>

                    {
                        dataList?.map((res, i) => {
                            return <Grid item xs={12} sm={6} md={4}>
                                <Job jobDetails={res} />
                            </Grid>
                        })
                    }
                </Grid>
            </InfiniteScroll>
        </div>
    )
}

export default JobListing