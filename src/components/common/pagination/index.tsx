'use client'

import {
  PaginationBase,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { getPaginationItems } from './pagination'

type Props = {
  page: number
  pageSize: number
  totalCount: number
  length?: number
  name?: string
  onChange: (page: number) => void
}

const Pagination = ({
  page = 1,
  pageSize = 1,
  totalCount = 1,
  length = 7,
  name = '',
  onChange,
}: Props) => {
  const numPages = Math.ceil(totalCount / pageSize)
  const pagination = getPaginationItems(page, numPages, length)

  const handlePrevious = () => {
    if (page === 1) return
    onChange(page - 1)
  }

  const handleNext = () => {
    if (page === numPages) return
    onChange(page + 1)
  }

  const handleChangePage = (page: number) => {
    onChange(page)
  }

  return (
    <PaginationBase>
      <PaginationContent>
        {numPages > 1 && (
          <PaginationPrevious href="#" onClick={handlePrevious} />
        )}
        {pagination.map((pageItem) => {
          if (isNaN(pageItem)) {
            return <PaginationEllipsis key={`${name}_ellipsis`} />
          } else {
            return (
              <PaginationLink
                key={`${name}_${pageItem}_${pageItem}`}
                isActive={pageItem === page}
                href="#"
                onChange={() => handleChangePage(pageItem)}
              >
                {pageItem}
              </PaginationLink>
            )
          }
        })}
        {numPages > 1 && <PaginationNext href="#" onClick={handleNext} />}
      </PaginationContent>
    </PaginationBase>
  )
}

export default Pagination
