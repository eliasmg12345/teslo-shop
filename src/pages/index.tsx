import ShoptLayout from "@/components/layouts/ShoptLayout";
import { Typography } from "@mui/material";


export default function Home() {
  return (
    <ShoptLayout title={'Teslo Shop'} pageDescription={'encuentra los mejores productos'}>
      <Typography variant="h1" component='h1'>Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Todos los productos</Typography>
    </ShoptLayout>
  )
}
