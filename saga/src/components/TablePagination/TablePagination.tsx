import React, {FC} from 'react';
import styles from './TablePagination.module.css'

const LIMIT = 10;


interface TTablePaginationProps {
    className?: string;
    total?:number,
    page?:number,
    onChange:any
}

const TablePagination: FC<TTablePaginationProps> = ({
     total,
     page,
     onChange = () => {}
}) => {
    // @ts-ignore
    const totalPages = Math.ceil(total/LIMIT)
    return (
        <div className={styles.tablePaginationWrapper}>
            {
                Array
                    .from({length:totalPages},
                        (_, index) => index+1)
                    .map( pageIndex => {
                            const isActive = pageIndex === page;
                            const action = () => {
                                if (pageIndex !== page){
                                    onChange(pageIndex)
                                }
                            }

                            return isActive ?
                                <b key={pageIndex} onClick={action} style={{cursor:"pointer", color:'red'}}>
                                    {' '}{pageIndex}{' '}
                                </b>
                                :
                                <span key={pageIndex} onClick={action} className={styles.pageButton} style={{cursor:"pointer"}}>
                                 {' '}{pageIndex}{' '}
                                </span>
                        }

                    )

            }
        </div>
    );
};

export default TablePagination;
