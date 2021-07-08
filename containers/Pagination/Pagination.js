import React from 'react'
import { products } from '../../data'
import {Pagination as StyledPagination, Button} from './Pagination.style'

export default function Pagination({setPage, page, DEFAULT_PAGE_LIMIT, data}) {
    return (
        <StyledPagination>
            <Button
                type="previous"
              disabled={page === 1}
              onClick={() => setPage((old) => old - 1)}
            >Predhodna strana</Button>
            <Button
                type="next"
                disabled={
                page * DEFAULT_PAGE_LIMIT >=
                products.length 
              }
              onClick={() => setPage((old) => old + 1)}
            >Sljedeca strana</Button>
        </StyledPagination>
    )
}
