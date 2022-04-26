import Link from 'next/link'
import { Box, color } from '@chakra-ui/react'


const Footer = () => (
    <Box display="flex" gap="20px" justifyContent="center" textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.200">
        <Link href="/search" passHref >Search</Link>
        <Link href="/search?purpose=for-rent" passHref>Rent Property</Link>
        <Link href="/search?purpose=for-sale" passHref>Buy Property</Link>
    </Box>
)

export default Footer