import ShoptLayout from "@/components/layouts/ShoptLayout"
import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Badge } from "@mui/material";

const Custom404 = () => {
    return (
        <ShoptLayout title="Page Not Found" pageDescription="No hay nada que mostrar">
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <Typography variant="h1" component='h1' fontSize={100} fontWeight={200}>404 |</Typography>
                <Typography marginLeft={1}>No encontramos nada aqui</Typography>
            </Box>
        </ShoptLayout>
    )
}

export default Custom404