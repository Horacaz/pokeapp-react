import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

type Paginator = {
  maxPages: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
};

type PaginatorButtonProps = {
  displayValue: string | number;
  onClick: () => void;
  isDisabled: boolean;
  isCurrent?: boolean;
};

export default function Paginator({
  maxPages,
  setCurrentPage,
  currentPage,
}: Paginator) {
  const paginatorLength = 5;
  const [startingPageValue, setStartingPageValue] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (currentPage === 1) {
      setStartingPageValue(1);
    } else if (currentPage % paginatorLength === 0) {
      setStartingPageValue(currentPage - (paginatorLength - 1));
    } else {
      setStartingPageValue(currentPage - ((currentPage - 1) % paginatorLength));
    }
  };
  useEffect(() => {
    if (currentPage === 1) {
      setStartingPageValue(1);
    } else if (currentPage % paginatorLength === 0) {
      setStartingPageValue(currentPage - (paginatorLength - 1));
    } else {
      setStartingPageValue(currentPage - ((currentPage - 1) % paginatorLength));
    }
  }, [currentPage]);

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
        start={startingPageValue}
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
      _hover={{ bg: "brand.secondary", color: "brand.background" }}
      fontSize={["xs", "sm"]}
      m={["1px", 1]}
      isDisabled={props.isDisabled}
      color={props.isCurrent ? "brand.background" : "brand.text"}
      bgColor={props.isCurrent ? "brand.secondary" : "brand.primary"}
      fontWeight="bold"
      variant="solid"
      width={["4px", "4px", "100px"]}
      onClick={props.onClick}
    >
      {props.displayValue}
    </Button>
  );
}

type PaginatorPages = {
  start: number;
  length: number;
  maxPages: number;
  currentPage: number;
  onClick: (page: number) => void;
};

function PaginatorPages(props: PaginatorPages) {
  const { maxPages, currentPage, onClick, length, start } = props;
  const pagesToDisplay = Array.from({ length }, (_, i) => i);
  return (
    <>
      {pagesToDisplay.map((pageValue) => {
        const currentPageValue = start + pageValue;
        return (
          <PaginatorButton
            key={currentPageValue}
            displayValue={currentPageValue}
            isDisabled={currentPageValue > maxPages}
            isCurrent={currentPageValue === currentPage}
            onClick={() => onClick(currentPageValue)}
          />
        );
      })}
    </>
  );
}
