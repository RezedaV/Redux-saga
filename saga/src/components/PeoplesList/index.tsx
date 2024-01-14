import React, {FC, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {TPeoplesState} from '../../types/TypesPeoples';
import {RootState, useStoreDispatch} from "../../redux/store";
import { loadPeoples} from "../../redux/peoples";
import Table from "../Table/Table";
import TablePagination from "../TablePagination/TablePagination";
import styles from './PeoplesList.module.css'
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend, Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

interface TPeoplesListProps {}

export const PeoplesList: FC<TPeoplesListProps> = () => {
    const dispatch = useStoreDispatch()
    const peoples: TPeoplesState = useSelector((state: RootState) => state.peoples)

    useEffect(() => {
        dispatch(
            loadPeoples({
                    page: 1,
                    search: '',
                }
            ))
    }, []);


    const changePage = (newPage:number) => {
        dispatch(
            loadPeoples({
                page: newPage,
                search: peoples.search
            }),
        )
    }

    const onSearch = (e: { target: { value: any; }}) => {
        dispatch(
            loadPeoples({
                page: 1,
                search: e.target.value
            })
        )
    }

    return (
        <div className={styles.wrapper}>
            <h1>
                List of people
            </h1>
            <form >
                <input
                    style={{padding: "6px 12px", margin: "0 0  10px 0"}}
                    type="text"
                    value={peoples.search}
                    placeholder="Search..."
                    onChange={onSearch}
                />
            </form>
            {
                !peoples?.list?.results ?
                    <div>Loading...</div>
                    :
                    <>
                        <Table
                            data={peoples?.list?.results}
                        />
                        <TablePagination
                            page={peoples?.page}
                            total={peoples?.list?.count}
                            onChange={changePage}
                        />
                    </>
            }
            <div style={{height: "100%"}}>
                {
                    peoples?.list?.results &&
                    <>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={peoples?.list?.results}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="mass" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                            </BarChart>
                        </ResponsiveContainer>
                    </>
                }
            </div>

        </div>

    )
}
