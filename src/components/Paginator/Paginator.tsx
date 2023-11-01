import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

type PaginatorButtonProps = {
  displayValue: string | number;
  onClick: () => void;
  isDisabled: boolean;
  isCurrent?: boolean;
};

export default function Paginator({ maxPages }: { maxPages: number }) {
  const paginatorLength = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [startingPageValue, setStartingPageValue] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setStartingPageValue;
  });

  return (
    <>
      <PaginatorButton
        displayValue="<<"
        isDisabled={currentPage === 1}
        onClick={() => handlePageChange(1)}
      />
      <PaginatorButton
        displayValue="<"
        isDisabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      />

      <PaginatorPages
        initialPageValue={startingPageValue}
        length={paginatorLength}
        maxPages={maxPages}
        currentPage={currentPage}
        onClick={handlePageChange}
      />

      <PaginatorButton
        displayValue=">"
        isDisabled={currentPage === maxPages}
        onClick={() => handlePageChange(currentPage + 1)}
      />
      <PaginatorButton
        displayValue=">>"
        isDisabled={currentPage === maxPages}
        onClick={() => handlePageChange(maxPages)}
      />
    </>
  );
}

function PaginatorButton(props: PaginatorButtonProps) {
  return (
    <Button
      isDisabled={props.isDisabled}
      color={props.isCurrent ? "brand.primary" : "brand.background"}
      bgColor={props.isCurrent ? "brand.accent" : "brand.primary"}
      fontWeight="bold"
      m={1}
      p={2}
      variant="solid"
      onClick={props.onClick}
    >
      {props.displayValue}
    </Button>
  );
}

function PaginatorPages(props: {
  initialPageValue: number;
  length: number;
  maxPages: number;
  currentPage: number;
  onClick: (page: number) => void;
}) {
  const { maxPages, currentPage, onClick } = props;

  const startingPageValue = handlePaginatorPageDisplayValue({
    maxPages,
    currentPage,
    pagesToDisplay,
  });
  const pagesToDisplay = Array.from({ length: props.length }, (_, i) => i + 1);

  return (
    <>
      {pagesToDisplay.map((pageIndex) => {
        const pageValue = startingPageValue + pageIndex;
        return (
          <PaginatorButton
            key={pageValue}
            displayValue={pageValue}
            isDisabled={pageValue > maxPages}
            isCurrent={pageValue === currentPage}
            onClick={() => onClick(pageValue)}
          />
        );
      })}
    </>
  );
}

type PageDisplayValue = {
  currentPage: number;
  pagesToDisplay: number[];
  maxPages: number;
};
function handlePaginatorPageDisplayValue({
  currentPage,
  pagesToDisplay,
  maxPages,
}: PageDisplayValue) {
  if (pagesToDisplay[0] === (currentPage && currentPage !== 1))
    return currentPage;
  if (pagesToDisplay[4] === (currentPage && currentPage !== maxPages))
    return currentPage + 1;
  return pagesToDisplay[0];
}

/*
function PaginatorPages(props: {
  endPage: number;
  startPage: number;
  maxPages: number;
  currentPage: number;
}) {
  const { endPage, startPage, maxPages, currentPage } = props;


  const pagesToDisplay = Array.from({ length: endPage - startPage + 1 }).map(
    (_, index) => {
      const page = startPage + index;

      /*

      (onNextPageClick)
      
      if (pagesToDisplay[4].key == currentPage){
        const page = endPage + 1 >>>>> 5 + 1                     firstPage = 6 . . . . . .
        setCurrentPage(page)
      }


      (onPreviousClick)
      if (pagesToDisplay[0].key == currentPage && currentPage !=== 1){
        // en el caso de 6 >  startPage - 5 === 1, 1 2 3 4 5 y currentPage seria 5.
        const page = startPage - 5                     firstPage = 1 . . . . . .
        setCurrentPage(startPage)
      }
      


      return (
        <PaginatorButton
          key={page}
          displayValue={page}
          isDisabled={page > maxPages}
          isCurrent={page === currentPage}
          onClick={() => handlePageChange(page)}
        />
      );
    }
  );

  if (pagesToDisplay[4].key == endPage) {
    const page = endPage + 1;
  }
}


*/

/*
const startPage = Math.max(1, currentPage - pagesPerPage + 1);
const endPage = Math.min(maxPages, startPage + pagesPerPage - 1);

*/
