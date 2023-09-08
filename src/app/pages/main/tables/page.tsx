'use client'

import {Box, SimpleGrid} from '@chakra-ui/react';
import ColumnsTable from 'components/main/tables/ColumnsTable';
import ComplexTable from 'components/main/tables/ComplexTable';
import DevelopmentTable from 'components/main/tables/DevelopmentTable';
import tableDataColumns from 'variables/tables/tableDataColumns';
import tableDataComplex from 'variables/tables/tableDataComplex';
import tableDataDevelopment from 'variables/tables/tableDataDevelopment';
import tableDataCheck from 'variables/tables/tableDataCheck';
import CheckTable from "../../../../components/main/tables/CheckTable";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        <DevelopmentTable tableData={tableDataDevelopment} />
        <CheckTable tableData={tableDataCheck} />
        <ColumnsTable tableData={tableDataColumns} />
        <ComplexTable tableData={tableDataComplex} />
      </SimpleGrid>
    </Box>
  );
}
